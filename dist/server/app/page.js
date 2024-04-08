(()=>{var e={};e.id=931,e.ids=[931],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},7310:e=>{"use strict";e.exports=require("url")},7779:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>x,pages:()=>d,routeModule:()=>u,tree:()=>c});var a=s(482),r=s(9108),i=s(2563),n=s.n(i),l=s(8300),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);s.d(t,o);let c=["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1136)),"F:\\Office\\sms_landing\\src\\app\\page.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,3091)),"F:\\Office\\sms_landing\\src\\app\\layout.tsx"],error:[()=>Promise.resolve().then(s.bind(s,4117)),"F:\\Office\\sms_landing\\src\\app\\error.tsx"],"not-found":[()=>Promise.resolve().then(s.bind(s,3600)),"F:\\Office\\sms_landing\\src\\app\\not-found.tsx"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["F:\\Office\\sms_landing\\src\\app\\page.tsx"],x="/page",p={require:s,loadChunk:()=>Promise.resolve()},u=new a.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},4033:(e,t,s)=>{Promise.resolve().then(s.bind(s,8411))},8411:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>m});var a=s(5344),r=s(9410),i=s(41),n=s(3343),l=s(6315);let o={src:"/_next/static/media/shikshya_landing.9c58cfa2.svg",height:508,width:917,blurWidth:0,blurHeight:0};var c=s(6506),d=s(3729),x=s(1638);async function p(e){return(await fetch("https://frontend.shikshya.me/public/api/v1/subscribe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e})})).ok}var u=s(9697);function h(){let[e,t]=(0,d.useState)(""),s=async()=>{if(""==e){u.toast.warning("Email is required");return}try{await p(e)?(u.toast.success("Thank you for subscribing"),t("")):u.toast.error("Server Error")}catch(e){console.log(e)}};return(0,a.jsxs)("div",{className:"flex z-[1] lg:w-[65%] rg:w-[70%] md:w-[75%] sm:w-[90%] w-[95%]",children:[a.jsx("input",{placeholder:"Drop your Email to stay updated!",className:`w-full text-gray-600 md:text-xs sm:text-xxs text-xxxs outline outline-1 outline-neutral-200 rounded-md bg-white sm:px-5 px-4 sm:py-3 py-2
          placeholder:text-gray-400 md:placeholder:text-xs sm:placeholder:text-xxs placeholder:text-xxxs appearance-none`,onChange:e=>{t(e.target.value)},value:e,type:"email"}),a.jsx(x.Z,{title:"Get Notified",className:"min-w-[20%] lg:text-xxs text-xxxs lg:px-6 px-4 lg:py-2 py-1",onClick:s})]})}function m(){return a.jsx(a.Fragment,{children:(0,a.jsxs)("div",{className:"flex flex-col min-h-[100vh] items-center bg-header-gradient justify-between  md:pt-28 pt-52 xl:px-[12%] lg:px-[7%] px-[5%]",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center gap-5",children:[(0,a.jsxs)("h2",{className:" text-text-dark text-center lg:text-xl rg:text-[30px] md:text-lg sm:text-md text-xs text-48 font-semibold mt-10",children:["Unlocking the Future of Education:",a.jsx("span",{className:"text-brand-color",children:"Shikshya"}),a.jsx("br",{}),"Launching Soon!"]}),a.jsx("p",{className:"md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[75%] rg:w-[70%] md:w-[80%] sm:w-[90%] w-[95%] text-center",children:"We are thrilled to introduce Shikshya, a comprehensive school management system designed to streamline administrative tasks, enhance communication, and elevate the learning experience."}),a.jsx(h,{})]}),(0,a.jsxs)("div",{className:"flex flex-row pt-14 w-full justify-between md:items-end items-center",children:[a.jsx("p",{className:"text-text-medium text-xxs pb-8",children:"\xa9 2023 Shikshya."}),a.jsx(r.default,{src:o,alt:"Shikshya Landing",width:2e3,height:2e3,className:"w-[70%] md:block hidden"}),(0,a.jsxs)("div",{className:"flex flex-row gap-4  pb-8",children:[a.jsx(c.default,{href:"https://www.facebook.com/shikshyaapp",target:"_blank",children:a.jsx(r.default,{src:n.default,alt:"Facebook Icon"})}),a.jsx(c.default,{href:"https://www.linkedin.com/company/shikshya-app/",target:"_blank",children:a.jsx(r.default,{src:l.default,alt:"LinkedIn Icon"})}),a.jsx(c.default,{href:"https://www.instagram.com/shikshya.app/",target:"_blank",children:a.jsx(r.default,{src:i.default,alt:"Instagram Icon"})})]})]})]})})}},1136:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>r,default:()=>n});let a=(0,s(6843).createProxy)(String.raw`F:\Office\sms_landing\src\app\page.tsx`),{__esModule:r,$$typeof:i}=a,n=a.default},3343:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/FacebookIcon.f155fd4d.svg",height:21,width:20,blurWidth:0,blurHeight:0}},41:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/InstagramIcon.6851f54e.svg",height:21,width:20,blurWidth:0,blurHeight:0}},6315:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>a});let a={src:"/_next/static/media/LinkedInIcon.2286446c.svg",height:21,width:20,blurWidth:0,blurHeight:0}}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),a=t.X(0,[638,714,96],()=>s(7779));module.exports=a})();