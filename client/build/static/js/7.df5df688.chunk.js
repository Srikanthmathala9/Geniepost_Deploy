(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{111:function(e,t,o){"use strict";var n=o(3),a=o(0),l=o(6),i=o(21),r=o(98),c=o(16),s=o(30),d=o(20),m=o(97),u=o(82);function p(e){return Object(u.a)("MuiSvgIcon",e)}Object(m.a)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=o(10);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],b=Object(d.a)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,"inherit"!==o.color&&t["color".concat(Object(c.a)(o.color))],t["fontSize".concat(Object(c.a)(o.fontSize))]]}})(e=>{let{theme:t,ownerState:o}=e;var n,a,l,i,r,c,s,d,m,u,p,f,h;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:o.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(n=t.transitions)||null==(a=n.create)?void 0:a.call(n,"fill",{duration:null==(l=t.transitions)||null==(l=l.duration)?void 0:l.shorter}),fontSize:{inherit:"inherit",small:(null==(i=t.typography)||null==(r=i.pxToRem)?void 0:r.call(i,20))||"1.25rem",medium:(null==(c=t.typography)||null==(s=c.pxToRem)?void 0:s.call(c,24))||"1.5rem",large:(null==(d=t.typography)||null==(m=d.pxToRem)?void 0:m.call(d,35))||"2.1875rem"}[o.fontSize],color:null!=(u=null==(p=(t.vars||t).palette)||null==(p=p[o.color])?void 0:p.main)?u:{action:null==(f=(t.vars||t).palette)||null==(f=f.action)?void 0:f.active,disabled:null==(h=(t.vars||t).palette)||null==(h=h.action)?void 0:h.disabled,inherit:void 0}[o.color]}}),v=a.forwardRef(function(e,t){const o=Object(s.a)({props:e,name:"MuiSvgIcon"}),{children:d,className:m,color:u="inherit",component:v="svg",fontSize:g="medium",htmlColor:j,inheritViewBox:w=!1,titleAccess:S,viewBox:x="0 0 24 24"}=o,O=Object(l.a)(o,h),z=a.isValidElement(d)&&"svg"===d.type,E=Object(n.a)({},o,{color:u,component:v,fontSize:g,instanceFontSize:e.fontSize,inheritViewBox:w,viewBox:x,hasSvgAsChild:z}),y={};w||(y.viewBox=x);const k=(e=>{const{color:t,fontSize:o,classes:n}=e,a={root:["root","inherit"!==t&&"color".concat(Object(c.a)(t)),"fontSize".concat(Object(c.a)(o))]};return Object(r.a)(a,p,n)})(E);return Object(f.jsxs)(b,Object(n.a)({as:v,className:Object(i.a)(k.root,m),focusable:"false",color:j,"aria-hidden":!S||void 0,role:S?"img":void 0,ref:t},y,O,z&&d.props,{ownerState:E,children:[z?d.props.children:d,S?Object(f.jsx)("title",{children:S}):null]}))});v.muiName="SvgIcon";var g=v;function j(e,t){function o(o,a){return Object(f.jsx)(g,Object(n.a)({"data-testid":"".concat(t,"Icon"),ref:a},o,{children:e}))}return o.muiName=g.muiName,a.memo(a.forwardRef(o))}o.d(t,"a",function(){return j})},92:function(e,t,o){"use strict";o.r(t);var n,a=o(26),l=o(0),i=o.n(l),r=o(20),c=o(84),s=o(86),d=o(2),m=o(54),u=o(111),p=o(10),f=Object(u.a)(Object(p.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"}),"ArrowBack"),h=Object(u.a)(Object(p.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const b=Object(r.a)(c.a)({padding:15}),v=Object(r.a)(s.a)({fontSize:22,margin:"10px 0 20px 75px",display:"flex"}),g=Object(r.a)(c.a)(n||(n=Object(a.a)(["\n    font-size: 12px !important;\n    background: #ddd;\n    color: #222;\n    border-radius: 4px;\n    margin-left: 6px;\n    padding: 2px 4px;\n    align-self: center;\n"]))),j=Object(r.a)("img")({borderRadius:"50%",width:40,height:40,margin:"5px 10px 0 10px",backgroundColor:"#cccccc"}),w=Object(r.a)(c.a)({marginLeft:15,width:"100%","& > div":{display:"flex","& > p > span":{fontSize:12,color:"#5E5E5E"}}}),S=Object(r.a)(s.a)({margin:"0 50px 0 auto",fontSize:12,color:"#5E5E5E"});t.default=(()=>{const{openDrawer:e}=Object(d.s)(),{state:t}=Object(d.o)(),{email:o}=t;return i.a.createElement(c.a,{style:e?{marginLeft:250,width:"100%"}:{width:"100%"}},i.a.createElement(b,null,i.a.createElement(f,{fontSize:"small",color:"action",onClick:()=>window.history.back()}),i.a.createElement(h,{fontSize:"small",color:"action",style:{marginLeft:40}})),i.a.createElement(v,null,o.subject," ",i.a.createElement(g,{component:"span"},"Inbox")),i.a.createElement(c.a,{style:{display:"flex"}},i.a.createElement(j,{src:m.c,alt:"profile"}),i.a.createElement(w,null,i.a.createElement(c.a,null,i.a.createElement(s.a,null,o.to.split("@")[0],i.a.createElement(c.a,{component:"span"},"\xa0<",o.to,">")),i.a.createElement(S,null,new window.Date(o.date).getDate(),"\xa0",new window.Date(o.date).toLocaleString("default",{month:"long"}),"\xa0",new window.Date(o.date).getFullYear())),i.a.createElement(s.a,{style:{marginTop:20}},o.body))))})}}]);
//# sourceMappingURL=7.df5df688.chunk.js.map