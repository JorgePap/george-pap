import{j as e,T as l,a as n,b as x,u as i,H as r,I as d,c as p,R as m,P as h,N as j}from"./index-D_Ctbz38.js";const c=({text:t})=>e.jsx("div",{className:"flex ",children:t.split("").map((s,o)=>e.jsx(l,{element:n.H3,variant:x.H2,classes:" transition-transform duration-200 hover:-translate-y-2 lg:hover:-translate-y-6",children:s===" "?" ":s},o))}),f=({onClick:t})=>{const{t:s}=i();return e.jsxs("div",{className:"min-h-screen flex flex-col justify-between",children:[e.jsxs("div",{className:"pt-[80px] md:pt-[120px] lg:pt-[120px] xl:pt-[160px] flex flex-col text-wrap",children:[e.jsx(c,{text:s("hello",{ns:r})}),e.jsx(c,{text:s("iAmGeorge",{ns:r})}),e.jsx(c,{text:s("lastName",{ns:r})})]}),e.jsxs("div",{className:"flex justify-between pb-[30px] md:pb-[50px] lg:pb-[50px]",children:[e.jsx("div",{onClick:t,children:e.jsx(l,{element:n.P,variant:x.BUTTON_SM,text:s("scroll",{ns:r}),classes:"cursor-pointer"})}),e.jsx(l,{element:n.LABEL,variant:x.LABEL,text:"Front-end Developer"})]})]})},v="/george-pap/assets/me-DBKvlp7e.jpg",u=()=>{const{t}=i(),s=()=>{const o="/george-pap/my-cv.pdf",a=document.createElement("a");a.href=o,a.download="MyCV.pdf",document.body.appendChild(a),a.click(),document.body.removeChild(a)};return e.jsx("div",{className:"min-h-screen pt-[40px] md:pt-[120px] lg:pt-[150px]",children:e.jsxs("div",{className:"flex flex-col lg:flex-row w-full ",children:[e.jsxs("div",{className:"flex flex-col gap-xl basis-1/2",children:[e.jsx(l,{element:n.P,variant:x.H3,text:t("me",{ns:r}),color:"text-transparent text-stroke-black dark:text-stroke-white"}),e.jsx(l,{element:n.P,variant:x.P1,text:t("meTextOne",{ns:r})}),e.jsx(l,{element:n.P,variant:x.P1,text:t("meTextTwo",{ns:r})}),e.jsx(l,{element:n.P,variant:x.P1,text:t("meTextThree",{ns:r})}),e.jsxs("div",{onClick:s,className:"flex w-max p-md items-center gap-sm border border-neutral-1 rounded-lg cursor-pointer",children:[e.jsx(l,{element:n.P,variant:x.P1,text:"Download CV"}),e.jsx("div",{className:"w-[18px] h-[18px]",children:e.jsx(d,{icon:p.DOWNLOAD_ICON,classes:"w-full h-full fill-white"})})]})]}),e.jsx("div",{className:"flex basis-1/2 justify-center items-center",children:e.jsx("img",{src:v,className:`border-[1px] border-neutral-2 dark:border-neutral-1 rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] w-[250px] h-[250px] mt-[40px] mb-[40px]
           md:w-[350px] md:h-[350px]
           lg:w-[400px] lg:h-[400px] lg:mt-[100px]
           xl:w-[430px] xl:h-[430px] 
           object-cover`})})]})})},w=()=>{const{t}=i(),s=()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})};return e.jsxs("div",{className:"px-[30px] md:px-[115px] lg:px-[130px] xl:px-[150px] overflow-x-hidden ",children:[e.jsx(f,{onClick:s}),e.jsx(u,{}),e.jsx(m,{to:h.PORTFOLIO,text:t("portfolio",{ns:j}),left:!1,routeIcon:p.ARROW_RIGHT})]})};export{w as HomePage,w as default};
