"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[47419],{88038:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>a,toc:()=>h});var l=n(74848),c=n(28453);const s={},d="\u6570\u636e\u8fc1\u79fb",a={id:"best-practices/data_migration",title:"\u6570\u636e\u8fc1\u79fb",description:"1. \u7b80\u4ecb",source:"@site/versions/version-4.1.0/zh-CN/source/7.best-practices/3.data_migration.md",sourceDirName:"7.best-practices",slug:"/best-practices/data_migration",permalink:"/tugraph-db/en-US/zh/4.1.0/best-practices/data_migration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528 TuGraph \u56fe\u5b66\u4e60\u6a21\u5757\u8fdb\u884c\u70b9\u5206\u7c7b",permalink:"/tugraph-db/en-US/zh/4.1.0/best-practices/learn_practices"},next:{title:"\u73af\u5883\u548c\u7248\u672c\u9009\u62e9",permalink:"/tugraph-db/en-US/zh/4.1.0/best-practices/selection"}},i={},h=[{value:"1. \u7b80\u4ecb",id:"1-\u7b80\u4ecb",level:2},{value:"2. \u517c\u5bb9\u8fc1\u79fb",id:"2-\u517c\u5bb9\u8fc1\u79fb",level:2},{value:"2.1. \u5907\u4efd\u6570\u636e",id:"21-\u5907\u4efd\u6570\u636e",level:3},{value:"2.2. \u542f\u52a8\u65b0\u670d\u52a1",id:"22-\u542f\u52a8\u65b0\u670d\u52a1",level:3},{value:"2.3. \u505c\u6b62\u539f\u670d\u52a1",id:"23-\u505c\u6b62\u539f\u670d\u52a1",level:3},{value:"3. \u5347\u7ea7\u8fc1\u79fb",id:"3-\u5347\u7ea7\u8fc1\u79fb",level:2},{value:"3.1. \u5bfc\u51fa\u6570\u636e",id:"31-\u5bfc\u51fa\u6570\u636e",level:3},{value:"3.2. \u5bfc\u5165\u6570\u636e",id:"32-\u5bfc\u5165\u6570\u636e",level:3},{value:"3.3. \u542f\u52a8\u65b0\u670d\u52a1",id:"33-\u542f\u52a8\u65b0\u670d\u52a1",level:3},{value:"3.4. \u505c\u6b62\u539f\u670d\u52a1",id:"34-\u505c\u6b62\u539f\u670d\u52a1",level:3},{value:"4. \u5728\u7ebf\u8fc1\u79fb",id:"4-\u5728\u7ebf\u8fc1\u79fb",level:2},{value:"4.1. \u62f7\u8d1d\u6570\u636e",id:"41-\u62f7\u8d1d\u6570\u636e",level:3},{value:"4.2. \u542f\u52a8\u65b0\u8282\u70b9",id:"42-\u542f\u52a8\u65b0\u8282\u70b9",level:3},{value:"4.3. \u505c\u6b62\u539f\u8282\u70b9",id:"43-\u505c\u6b62\u539f\u8282\u70b9",level:3}];function t(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.header,{children:(0,l.jsx)(r.h1,{id:"\u6570\u636e\u8fc1\u79fb",children:"\u6570\u636e\u8fc1\u79fb"})}),"\n",(0,l.jsx)(r.h2,{id:"1-\u7b80\u4ecb",children:"1. \u7b80\u4ecb"}),"\n",(0,l.jsx)(r.p,{children:"\u6570\u636e\u8fc1\u79fb\u662f\u6307\u5c06\u6570\u636e\u4ece\u4e00\u4e2a\u7cfb\u7edf\u3001\u5b58\u50a8\u4ecb\u8d28\u6216\u5e94\u7528\u7a0b\u5e8f\u8fc1\u79fb\u5230\u53e6\u4e00\u4e2a\u7cfb\u7edf\u3001\u5b58\u50a8\u4ecb\u8d28\u6216\u5e94\u7528\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u3002\u5f53TuGraph\u8981\u5347\u7ea7\u6216\u8005\u7cfb\u7edf\u786c\u4ef6\u73af\u5883\u53d1\u751f\u53d8\u5316\u65f6\uff0c\n\u9700\u8981\u5bf9\u539fTuGraph\u670d\u52a1\u4e2d\u7684\u6570\u636e\u8fdb\u884c\u8fc1\u79fb\u3002\u4ee5\u7cfb\u7edf\u786c\u4ef6\u73af\u5883\u548c\u8f6f\u4ef6\u7248\u672c\u4e3a\u4f9d\u636e\u8fdb\u884c\u5212\u5206\uff0c\u672c\u6587\u5c06\u6570\u636e\u8fc1\u79fb\u5206\u4e3a\u4e09\u79cd\u65b9\u6848\uff1a"}),"\n",(0,l.jsxs)(r.ol,{children:["\n",(0,l.jsx)(r.li,{children:"\u517c\u5bb9\u8fc1\u79fb\uff1a\u5f53\u8fc1\u79fb\u524d\u540e\u7cfb\u7edf\u73af\u5883\u4e00\u81f4\u4e14TuGraph\u8f6f\u4ef6\u517c\u5bb9\u65f6\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5907\u4efd\u6062\u590d\u7684\u65b9\u5f0f\u8fc1\u79fb\u6570\u636e\uff1b"}),"\n",(0,l.jsx)(r.li,{children:"\u5347\u7ea7\u8fc1\u79fb\uff1a\u5f53\u8fc1\u79fb\u524d\u540e\u7cfb\u7edf\u73af\u5883\u4e0d\u4e00\u81f4\u6216TuGraph\u8f6f\u4ef6\u4e0d\u517c\u5bb9\u65f6\uff0c\u9700\u8981\u4f7f\u7528\u5148\u5bfc\u51fa\u6570\u636e\u518d\u91cd\u65b0\u5bfc\u5165\u7684\u65b9\u5f0f\u8fc1\u79fb\u6570\u636e\uff1b"}),"\n",(0,l.jsx)(r.li,{children:"\u5728\u7ebf\u8fc1\u79fb\uff1a\u5f53\u5bf9\u9ad8\u53ef\u7528\u96c6\u7fa4\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u4e14\u96c6\u7fa4\u7f51\u7edc\u73af\u5883\u826f\u597d\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u589e\u5220\u8282\u70b9\u7684\u7684\u65b9\u5f0f\u5c06\u539f\u96c6\u7fa4\u5e73\u6ed1\u5207\u6362\u5230\u65b0\u96c6\u7fa4\u3002\n\u63a5\u4e0b\u6765\u672c\u6587\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u8fd9\u4e09\u79cd\u65b9\u6848\u3002"}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"2-\u517c\u5bb9\u8fc1\u79fb",children:"2. \u517c\u5bb9\u8fc1\u79fb"}),"\n",(0,l.jsxs)(r.p,{children:["\u517c\u5bb9\u8fc1\u79fb\u6307\u7684\u662f\u5728\u7cfb\u7edf\u73af\u5883\u4e0d\u53d8\uff0c\u4e14TuGraph\u8f6f\u4ef6\u7248\u672c\u517c\u5bb9\u65f6\uff0c\u539f\u670d\u52a1\u7684\u6570\u636e\u548c\u5b58\u50a8\u8fc7\u7a0b\u53ef\u4ee5\u5728\u65b0\u670d\u52a1\u4e2d\u4f7f\u7528\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u8fc1\u79fb\u3002\n\u7528\u6237\u53ef\u4ee5\u5148\u4f7f\u7528",(0,l.jsx)(r.code,{children:"lgraph_backup"}),"\u5de5\u5177\u5907\u4efd\u6570\u636e\uff0c\u7136\u540e\u5c06\u6570\u636e\u4f20\u8f93\u5230\u65b0\u673a\u5668\u4e2d\u5e76\u91cd\u542f\u670d\u52a1\u3002\u5177\u4f53\u8fc1\u79fb\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(r.h3,{id:"21-\u5907\u4efd\u6570\u636e",children:"2.1. \u5907\u4efd\u6570\u636e"}),"\n",(0,l.jsxs)(r.p,{children:["\u4f7f\u7528",(0,l.jsx)(r.code,{children:"lgraph_backup"}),"\u5de5\u5177\u5907\u4efd\u6570\u636e"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  lgraph_backup -s db -d db.bck\n"})}),"\n",(0,l.jsxs)(r.p,{children:["\u672c\u6b65\u9aa4\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528",(0,l.jsx)(r.code,{children:"cp"}),"\u547d\u4ee4\uff0c\u4e0d\u8fc7",(0,l.jsx)(r.code,{children:"cp"}),"\u547d\u4ee4\u4f1a\u62f7\u8d1d\u4e00\u4e9b\u591a\u4f59\u7684\u5143\u6570\u636e\uff0cHA\u6a21\u5f0f\u4e0b\u4e5f\u4f1a\u62f7\u8d1draft\u7684\u5143\u6570\u636e\u5bfc\u81f4\u8fc1\u79fb\u4e4b\u540e\u96c6\u7fa4\u91cd\u542f\u5931\u8d25\uff0c\n\u56e0\u6b64\u5efa\u8bae\u6570\u636e\u8fc1\u79fb\u65f6\u4f7f\u7528",(0,l.jsx)(r.code,{children:"lgraph_backup"}),"\u5de5\u5177\u66ff\u4ee3",(0,l.jsx)(r.code,{children:"cp"}),"\u547d\u4ee4\u3002"]}),"\n",(0,l.jsx)(r.h3,{id:"22-\u542f\u52a8\u65b0\u670d\u52a1",children:"2.2. \u542f\u52a8\u65b0\u670d\u52a1"}),"\n",(0,l.jsx)(r.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u542f\u52a8\u65b0\u670d\u52a1\uff0c\u5b58\u50a8\u8fc7\u7a0b\u4f1a\u81ea\u52a8\u52a0\u8f7d\u5230\u65b0\u670d\u52a1\u4e2d"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  lgraph_server -c /usr/local/etc/lgraph.json --directory db.bck -d start\n"})}),"\n",(0,l.jsx)(r.h3,{id:"23-\u505c\u6b62\u539f\u670d\u52a1",children:"2.3. \u505c\u6b62\u539f\u670d\u52a1"}),"\n",(0,l.jsx)(r.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u505c\u6b62\u539f\u670d\u52a1"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  lgraph_server -c /usr/local/etc/lgraph.json --directory db.bck -d stop\n"})}),"\n",(0,l.jsx)(r.h2,{id:"3-\u5347\u7ea7\u8fc1\u79fb",children:"3. \u5347\u7ea7\u8fc1\u79fb"}),"\n",(0,l.jsxs)(r.p,{children:["\u5f53\u7528\u6237\u8981\u628a\u539f\u59cb\u670d\u52a1\u8fc1\u79fb\u5230\u4e00\u4e2a\u5dee\u5f02\u5316\u73af\u5883\u4e2d\uff08\u6bd4\u5982\u4ececentos7\u8fc1\u79fb\u5230ubuntu18.04\uff09\uff0c\u6216\u8005TuGraph\u7248\u672c\u53d8\u5316\u8f83\u5927\u524d\u540e\u4e0d\u517c\u5bb9\u65f6\uff08\u59823.4.0\u548c3.6.0\uff09\uff0c\n\u7528\u6237\u53ef\u4ee5\u5148\u4f7f\u7528",(0,l.jsx)(r.code,{children:"lgraph_export"}),"\u5de5\u5177\u5c06\u6570\u636e\u5bfc\u51fa\u6210\u6587\u4ef6\uff0c\u4f20\u8f93\u5230\u65b0\u673a\u5668\u4e2d\uff0c\u518d\u4f7f\u7528",(0,l.jsx)(r.code,{children:"lgraph_import"}),"\u5de5\u5177\u91cd\u65b0\u5bfc\u5165\u5e76\u91cd\u542f\u96c6\u7fa4\u3002\n\u8fd9\u6837\u53ef\u4ee5\u4fdd\u8bc1\u5728\u65b0\u73af\u5883\u4e0a\u80fd\u591f\u4f7f\u7528\uff0c\u4f46\u662f\u6548\u7387\u8f83\u4f4e\uff0c\u5b58\u50a8\u8fc7\u7a0b\u4e5f\u9700\u8981\u91cd\u65b0\u52a0\u8f7d\u3002\u5177\u4f53\u7684\u8fc1\u79fb\u6b65\u9aa4\u5982\u4e0b\uff1a"]}),"\n",(0,l.jsx)(r.h3,{id:"31-\u5bfc\u51fa\u6570\u636e",children:"3.1. \u5bfc\u51fa\u6570\u636e"}),"\n",(0,l.jsxs)(r.p,{children:["\u4f7f\u7528",(0,l.jsx)(r.code,{children:"lgraph_export"}),"\u5de5\u5177\u5bfc\u51fa\u6570\u636e\uff0c\u5e76\u5c06\u6570\u636e\u4f20\u8f93\u5230\u65b0\u673a\u5668\u4e0a"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  lgraph_export -d db -e db.export\n"})}),"\n",(0,l.jsx)(r.h3,{id:"32-\u5bfc\u5165\u6570\u636e",children:"3.2. \u5bfc\u5165\u6570\u636e"}),"\n",(0,l.jsxs)(r.p,{children:["\u4f7f\u7528",(0,l.jsx)(r.code,{children:"lgraph_import"}),"\u5de5\u5177\u5bfc\u5165\u6570\u636e\uff0c\u5e76\u624b\u52a8\u52a0\u8f7d\u5b58\u50a8\u8fc7\u7a0b\uff08\u8be6\u89c1",(0,l.jsx)(r.a,{href:"/tugraph-db/en-US/zh/4.1.0/developer-manual/client-tools/cpp-client",children:"client\u64cd\u4f5c\u6b65\u9aa4"}),"\uff09"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  lgraph_import -c db.export/import.config -d db\n"})}),"\n",(0,l.jsx)(r.h3,{id:"33-\u542f\u52a8\u65b0\u670d\u52a1",children:"3.3. \u542f\u52a8\u65b0\u670d\u52a1"}),"\n",(0,l.jsx)(r.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u542f\u52a8\u65b0\u670d\u52a1"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"   lgraph_server -c /usr/local/etc/lgraph.json --directory db.export -d start\n"})}),"\n",(0,l.jsx)(r.h3,{id:"34-\u505c\u6b62\u539f\u670d\u52a1",children:"3.4. \u505c\u6b62\u539f\u670d\u52a1"}),"\n",(0,l.jsx)(r.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u505c\u6b62\u539f\u670d\u52a1"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"   lgraph_server -c /usr/local/etc/lgraph.json --directory db.export -d stop\n"})}),"\n",(0,l.jsx)(r.h2,{id:"4-\u5728\u7ebf\u8fc1\u79fb",children:"4. \u5728\u7ebf\u8fc1\u79fb"}),"\n",(0,l.jsx)(r.p,{children:"\u5f53\u5bf9TuGraph\u9ad8\u53ef\u7528\u7248\u672c\u90e8\u7f72\u7684\u670d\u52a1\u5668\u96c6\u7fa4\u8fdb\u884c\u6570\u636e\u8fc1\u79fb\u65f6\uff0c\u5982\u679c\u7f51\u7edc\u5e26\u5bbd\u5145\u8db3\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u589e\u5220\u8282\u70b9\u7684\u65b9\u5f0f\u5bf9\u670d\u52a1\u8fdb\u884c\u5728\u7ebf\u8fc1\u79fb\u3002\u5177\u4f53\u8fc1\u79fb\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\uff1a"}),"\n",(0,l.jsx)(r.h3,{id:"41-\u62f7\u8d1d\u6570\u636e",children:"4.1. \u62f7\u8d1d\u6570\u636e"}),"\n",(0,l.jsx)(r.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u62f7\u8d1dleader\u8282\u70b9\u4e0a\u7684\u6570\u636e\uff0c\u5e76\u4e14\u4f20\u8f93\u5230\u65b0\u96c6\u7fa4\u7684\u673a\u5668\u8282\u70b9\u4e0a\u3002\u7531\u4e8eleader\u8282\u70b9\u4e0a\u6709\u6700\u5b8c\u6574\u7684raft\u65e5\u5fd7\uff0c\u62f7\u8d1dleader\u7684\u6570\u636e\u53ef\u4ee5\u6700\u5927\u7a0b\u5ea6\u5730\u51cf\u5c11\n\u65e5\u5fd7\u8ffd\u8d76\u7684\u65f6\u95f4\u3002"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  cp -r db db.cp\n"})}),"\n",(0,l.jsx)(r.h3,{id:"42-\u542f\u52a8\u65b0\u8282\u70b9",children:"4.2. \u542f\u52a8\u65b0\u8282\u70b9"}),"\n",(0,l.jsx)(r.p,{children:"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u5c06\u65b0\u8282\u70b9\u52a0\u5165\u96c6\u7fa4\uff0c\u52a0\u5165\u96c6\u7fa4\u540e\uff0c\u589e\u91cf\u6570\u636e\u81ea\u52a8\u540c\u6b65\u5230\u65b0\u8282\u70b9"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  lgraph_server -c /usr/local/etc/lgraph_ha.json --directory db.cp --ha_conf 192.168.0.1:9090,192.168.0.2:9090,192.168.0.3:9090 -d start\n"})}),"\n",(0,l.jsx)(r.h3,{id:"43-\u505c\u6b62\u539f\u8282\u70b9",children:"4.3. \u505c\u6b62\u539f\u8282\u70b9"}),"\n",(0,l.jsx)(r.p,{children:"\u505c\u6b62\u539f\u8282\u70b9\u670d\u52a1\uff0c\u540e\u7eed\u5e94\u7528\u8bf7\u6c42\u76f4\u63a5\u53d1\u7ed9\u65b0\u96c6\u7fa4"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{className:"language-bash",children:"  lgraph_server -c /usr/local/etc/lgraph_ha.json --directory db.cp --ha_conf 192.168.0.1:9090,192.168.0.2:9090,192.168.0.3:9090 -d stop\n"})})]})}function o(e={}){const{wrapper:r}={...(0,c.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(t,{...e})}):t(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>d,x:()=>a});var l=n(96540);const c={},s=l.createContext(c);function d(e){const r=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),l.createElement(s.Provider,{value:r},e.children)}}}]);