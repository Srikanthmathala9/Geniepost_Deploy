import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { TextServiceClient } from '@google-ai/generativelanguage';
import { GoogleAuth } from 'google-auth-library';
import Connection from './database/db.js';
import routes from './routes/route.js';
import GeneratedEmail from './model/generatedEmail.js';
import path from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', routes);

app.use(express.static(path.join(__dirname, "./client/build")));
app.get('*', function (_, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"), function (err) {
        res.status(500).send(err);
    });
});

const PORT = process.env.PORT || 8000;
mongoose.set('strictQuery', true);

Connection();

const MODEL_NAME = 'models/text-bison-001';
const API_KEY = process.env.GOOGLE_API_KEY;

if (!API_KEY) {
    throw new Error('API key is required. Please set your API key in the .env file.');
}

const client = new TextServiceClient({
    authClient: new GoogleAuth().fromAPIKey(API_KEY),
});

app.post('/generate-email', async (req, res) => {
    try {
        const { prompt } = req.body;

        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const [response] = await client.generateText({
            model: MODEL_NAME,
            prompt: {
                text: prompt,
            },
        });

        if (response && response.candidates && response.candidates.length > 0) {
            const emailContent = response.candidates[0].output.trim();
            // Save to MongoDB
            const generatedEmail = new GeneratedEmail({ prompt, emailContent });
            await generatedEmail.save();

            res.json({ emailContent });
        } else {
            res.status(500).json({ error: 'Failed to generate email content' });
        }
    } catch (error) {
        console.error('Error generating email content:', error);
        res.status(500).json({ error: 'Failed to generate email content' });
    }
});

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
