import{j as e,T as s,a as l,b as n,u as c,H as r,I as p,c as d,R as m,P as h}from"./index-DEq6wYgL.js";const i=({text:t})=>e.jsx("div",{className:"flex ",children:t.split("").map((x,o)=>e.jsx(s,{element:l.H3,variant:n.H2,classes:" transition-transform duration-200 hover:-translate-y-2 lg:hover:-translate-y-6",children:x===" "?" ":x},o))}),j=({onClick:t})=>{const{t:x}=c();return e.jsxs("div",{className:"min-h-screen flex flex-col justify-between",children:[e.jsxs("div",{className:"pt-[80px] md:pt-[120px] lg:pt-[120px] xl:pt-[160px] flex flex-col text-wrap",children:[e.jsx(i,{text:x("hello",{ns:r})}),e.jsx(i,{text:x("iAmGeorge",{ns:r})}),e.jsx(i,{text:x("lastName",{ns:r})})]}),e.jsxs("div",{className:"flex justify-between pb-[30px] md:pb-[50px] lg:pb-[50px]",children:[e.jsx("div",{onClick:t,children:e.jsx(s,{element:l.P,variant:n.BUTTON_SM,text:"Scroll down",classes:"cursor-pointer"})}),e.jsx(s,{element:l.LABEL,variant:n.LABEL,text:"Front-end Developer"})]})]})},f=()=>{const{t}=c(),x=()=>{const o="/george-pap/my-cv.pdf",a=document.createElement("a");a.href=o,a.download="MyCV.pdf",document.body.appendChild(a),a.click(),document.body.removeChild(a)};return e.jsx("div",{className:"min-h-screen pt-[40px] md:pt-[120px] lg:pt-[150px]",children:e.jsxs("div",{className:"flex flex-col lg:flex-row w-full ",children:[e.jsxs("div",{className:"flex flex-col gap-xl basis-1/2",children:[e.jsx(s,{element:l.P,variant:n.H3,text:t("me",{ns:r}),color:"text-transparent text-stroke-black dark:text-stroke-white"}),e.jsx(s,{element:l.P,variant:n.P1,text:t("meTextOne",{ns:r})}),e.jsx(s,{element:l.P,variant:n.P1,text:t("meTextTwo",{ns:r})}),e.jsx(s,{element:l.P,variant:n.P1,text:t("meTextThree",{ns:r})}),e.jsx(s,{element:l.P,variant:n.P1,text:t("meTextFour",{ns:r})}),e.jsxs("div",{onClick:x,className:"flex w-max p-md items-center gap-sm border border-neutral-1 rounded-lg cursor-pointer",children:[e.jsx(s,{element:l.P,variant:n.P1,text:"Download CV"}),e.jsx("div",{className:"w-[18px] h-[18px]",children:e.jsx(p,{icon:d.DOWNLOAD_ICON,classes:"w-full h-full fill-white"})})]})]}),e.jsx("div",{className:"flex basis-1/2 justify-center items-center",children:e.jsx("img",{className:`border-[1px] border-neutral-2 dark:border-neutral-1 rounded-[70%_30%_30%_70%_/_60%_40%_60%_40%] w-[250px] h-[250px] mt-[40px] mb-[40px]
           md:w-[350px] md:h-[350px]
           lg:w-[400px] lg:h-[400px] lg:mt-[100px]
           xl:w-[430px] xl:h-[430px] `})})]})})},u=()=>{const t=()=>{window.scrollBy({top:window.innerHeight,behavior:"smooth"})};return e.jsxs("div",{className:"px-[30px] md:px-[115px] lg:px-[125px] overflow-x-hidden ",children:[e.jsx(j,{onClick:t}),e.jsx(f,{}),e.jsx(m,{to:h.PORTFOLIO,text:"Portfolio",left:!1,routeIcon:d.ARROW_RIGHT})]})};export{u as HomePage,u as default};
