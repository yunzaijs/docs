"use strict";(self.webpackChunkyunzaijs_website=self.webpackChunkyunzaijs_website||[]).push([[4699],{1706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=s(4848),o=s(8453);const r={sidebar_position:4},i="\u673a\u5236",c={id:"b-next/dev-docs/plugins-event",title:"\u673a\u5236",description:"\u6b64\u5904\u5185\u5bb9\u9700\u8981\u9605\u8bfb\u524d\u7f6e\u7ae0\u8282",source:"@site/docs/b-next/dev-docs/4-plugins-event.md",sourceDirName:"b-next/dev-docs",slug:"/b-next/dev-docs/plugins-event",permalink:"/docs/docs/b-next/dev-docs/plugins-event",draft:!1,unlisted:!1,editUrl:"https://github.com/yunzaijs/docs/tree/main/docs/b-next/dev-docs/4-plugins-event.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u4e8b\u4ef6",permalink:"/docs/docs/b-next/dev-docs/message-event"},next:{title:"\u5b58\u50a8",permalink:"/docs/docs/b-next/dev-docs/stroe-dev"}},d={},l=[{value:"\u89c2\u5bdf\u8005",id:"\u89c2\u5bdf\u8005",level:2},{value:"\u8bb0\u65f6\u5668",id:"\u8bb0\u65f6\u5668",level:2},{value:"\u5b9a\u65f6\u4efb\u52a1",id:"\u5b9a\u65f6\u4efb\u52a1",level:2}];function a(e){const n={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"\u673a\u5236",children:"\u673a\u5236"})}),"\n",(0,t.jsx)(n.admonition,{title:"\u63d0\u793a",type:"tip",children:(0,t.jsx)(n.p,{children:"\u6b64\u5904\u5185\u5bb9\u9700\u8981\u9605\u8bfb\u524d\u7f6e\u7ae0\u8282"})}),"\n",(0,t.jsx)(n.h2,{id:"\u89c2\u5bdf\u8005",children:"\u89c2\u5bdf\u8005"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u7528\u4e8e\u89c2\u5bdf\u7fa4\u6216\u67d0\u4e2a\u7528\u6237\uff0c\u8fdb\u884c\u91cd\u590d\u6027\u6267\u884c\u6216\u6821\u9a8c\u7684\u884c\u4e3a"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { Observer, Messages } from 'yunzaijs'\nconst message = new Messages('message.private')\nmessage.use(\n  e => {\n    // \u521b\u5efa\n    const Obs = new Observer('message.private')\n\n    // \u63a8\u9001 \u8be2\u95ee\n    Obs.use(\n      // e \u4e8b\u4ef6  next \u591a\u4e2ause\u63a7\u5236  close \u5173\u95ed\u6240\u6709use\n      // \u6bcf\u6b21\u4e8b\u4ef6\u6765\u4e34\u90fd\u51fa\u53d1 use \uff0c\u4ec5\u5f53close\u6267\u884c\u65f6\u7ed3\u675f\n      (e, next, close) => {\n        if (e.msg == '/close') {\n          e.reply('close password')\n          close()\n        }\n\n        if (/^123456$/.test(e.msg)) {\n          e.reply('ture password')\n          close()\n        } else {\n          e.reply('input password')\n        }\n\n        // \u7ee7\u7eed \u5982\u679c Observer use\u8fd8\u6709\u7684\u8bdd\n        next()\n\n        // \u6761\u4ef6\uff0c\u4ec5\u652f\u6301  \u8d26\u53f7\u548c\u7fa4\u53f7\n      },\n      [e.user_id]\n    )\n\n    // \u89e6\u53d1\u63d0\u793a\n    e.reply('input password')\n  },\n  // login #login /login\n  [/^(#|\\/)?login$/]\n)\nexport const Word = message.ok\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8bb0\u65f6\u5668",children:"\u8bb0\u65f6\u5668"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u5373\u6307\u5b9a\u67d0\u4e00\u4e8b\u4ef6\u540e\u6267\u884c\u7684\u884c\u4e3a\uff0c\u57fa\u4e8e\u539f\u751f\u7684InterVal\u63a5\u53e3"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { setBotInterVal, Messages, clearBotInterVal } from 'yunzaijs'\n\nconst Uids = []\n\nconst ID = setBotInterVal(Bot => {\n  for (const user_id of Uids) {\n    Bot.pickFriend(user_id).sendMsg('hello interval')\n  }\n  // \u6bcf\u5206\u949f\u6267\u884c\u4e00\u6b21\n}, 60 * 1000)\n\nconst message = new Messages('message.private')\nmessage.use(\n  e => {\n    clearBotInterVal(ID)\n  },\n  // close #close /close\n  [/^(#|\\/)?close$/]\n)\nexport const Word = message.ok\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u5b9a\u65f6\u4efb\u52a1",children:"\u5b9a\u65f6\u4efb\u52a1"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u8fdb\u884c\u66f4\u590d\u6742\u7684\u65f6\u95f4\u884c\u4e3a\uff0c\u5982\u6307\u5b9a\u6bcf\u5929\u67d0\u70b9\u8fdb\u884c"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"import { setBotTask, Messages, clearBotTask } from 'yunzaijs'\n\nconst Uids = []\n\nconst Job = setBotTask(Bot => {\n  for (const user_id of Uids) {\n    Bot.pickFriend(user_id).sendMsg('hello task')\n  }\n  // \u6bcf\u592912\u70b9\u6267\u884c\n}, '0 12 * * *')\n\nconst message = new Messages('message.private')\nmessage.use(\n  e => {\n    clearBotTask(Job)\n  },\n  // close #close /close\n  [/^(#|\\/)?close$/]\n)\n\nexport const Word = message.ok\n"})})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var t=s(6540);const o={},r=t.createContext(o);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);