"use strict";(self.webpackChunkyunzaijs_website=self.webpackChunkyunzaijs_website||[]).push([[5725],{7820:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(4848),a=n(8453),s=n(1470),l=n(9365);const o={sidebar_position:1},i="\u5b89\u88c5",u={id:"b-next/user-docs/translate-your-site",title:"\u5b89\u88c5",description:"\u666e\u901a\u7528\u6237\u63a8\u8350\u4f7f\u7528 BOT PE \u4ed3\u5e93\uff0c\u5176\u914d\u7f6e\u4e86\u5bf9 Yunzai-V3 \u63d2\u4ef6\u7684\u517c\u5bb9\uff0c\u9002\u5408\u7edd\u5927\u591a\u6570\u7528\u6237\u4f7f\u7528\u3002",source:"@site/docs/b-next/user-docs/1-translate-your-site.md",sourceDirName:"b-next/user-docs",slug:"/b-next/user-docs/translate-your-site",permalink:"/docs/docs/b-next/user-docs/translate-your-site",draft:!1,unlisted:!1,editUrl:"https://github.com/yunzaijs/docs/tree/main/docs/b-next/user-docs/1-translate-your-site.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u7528\u6237\u6587\u6863",permalink:"/docs/docs/category/\u7528\u6237\u6587\u6863"},next:{title:"\u4f7f\u7528",permalink:"/docs/docs/b-next/user-docs/start"}},c={},d=[{value:"\u514b\u9686\u4ee3\u7801",id:"\u514b\u9686\u4ee3\u7801",level:3},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:3}];function h(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"})}),"\n","\n",(0,r.jsx)(t.admonition,{title:"BOT",type:"tip",children:(0,r.jsx)(t.p,{children:"\u666e\u901a\u7528\u6237\u63a8\u8350\u4f7f\u7528 BOT PE \u4ed3\u5e93\uff0c\u5176\u914d\u7f6e\u4e86\u5bf9 Yunzai-V3 \u63d2\u4ef6\u7684\u517c\u5bb9\uff0c\u9002\u5408\u7edd\u5927\u591a\u6570\u7528\u6237\u4f7f\u7528\u3002"})}),"\n",(0,r.jsx)(t.h3,{id:"\u514b\u9686\u4ee3\u7801",children:"\u514b\u9686\u4ee3\u7801"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="BOT PE"',children:"git clone --depth=1 https://github.com/yunzaijs/bot.git ./yunzai-bot\n"})}),"\n",(0,r.jsxs)(t.p,{children:["\u4ed3\u5e93\u5730\u5740\uff1a",(0,r.jsx)(t.a,{href:"https://github.com/yunzaijs/bot",children:"BOT PE"})]}),"\n",(0,r.jsx)(t.h3,{id:"\u5b89\u88c5\u4f9d\u8d56",children:"\u5b89\u88c5\u4f9d\u8d56"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="\u5207\u6362\u5230yunzai-bot\u6839\u76ee\u5f55"',children:"cd yunzai-bot\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="\u66f4\u6362npm\u955c\u50cf\u6e90\uff0c\u52a0\u901f\u4f9d\u8d56\u5305\u4e0b\u8f7d"',children:"npm config set registry https://registry.npmmirror.com\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u5982\u5df2\u914d\u7f6e\u955c\u50cf\uff0c\u8bf7\u53ef\u5ffd\u89c6"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="yarn \u4e0d\u80fd\u4f7f\u75282.x\u7248\u672c\uff0c\u5b83\u65e0\u6cd5\u4f7f\u7528link"',children:"npm install yarn@1.19.1 -g\n"})}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u5b89\u88c5",(0,r.jsx)(t.a,{href:"https://www.yarnpkg.cn/",children:"Yarn - JavaScript \u8f6f\u4ef6\u5305\u7ba1\u7406\u5668"})]}),"\n"]}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:"\u4e0d\u63a8\u8350pnpm\u548ccnpm"}),"\n"]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"16",label:"node\u7248\u672c>=18",default:!0,children:[(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:["\u5982\u679c node\u7248\u672c < 18 \u9700\u8981\u52a0\u53c2\u6570 ",(0,r.jsx)(t.code,{children:"--ignore-engines"})]}),"\n"]}),(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="\u6267\u884c\u4f9d\u8d56\u5b89\u88c5"',children:"yarn install\n"})})]}),(0,r.jsx)(l.A,{value:"18",label:"node\u7248\u672c<18",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-sh",metastring:'title="\u6267\u884c\u4f9d\u8d56\u5b89\u88c5"',children:"yarn install --ignore-engines\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>l});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),s=n(3104),l=n(6347),o=n(205),i=n(7485),u=n(1682),c=n(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=b({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function y(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(j,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(6540);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);