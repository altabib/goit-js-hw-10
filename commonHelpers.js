import"./assets/modulepreload-polyfill-ec808ebb.js";import{f as y,i as g}from"./assets/vendor-651d7991.js";const C="/goit-js-hw-10/assets/octagon-fdf1437b.svg",n=document.querySelector("[data-start]"),a=document.querySelector("[data-days]"),c=document.querySelector("[data-hours]"),i=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]");n.addEventListener("click",x);let s=!1,d=0;n.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(d=t[0],t[0]<=Date.now()){g.show({iconUrl:C,theme:"dark",message:"Please choose a date in the future",messageSize:"16px",messageColor:"white",backgroundColor:"#EF4040",position:"topRight",timeout:5e3});return}else n.disabled=!1;s=!0}};y("#datetime-picker",S);function p(t){const l=Math.floor(t/864e5),m=Math.floor(t%864e5/36e5),f=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:l,hours:m,minutes:f,seconds:h}}function o(t){return String(t).padStart(2,"0")}function x(){s=!1;const t=setInterval(()=>{const r=d-Date.now(),e=p(r);a.textContent=o(e.days),c.textContent=o(e.hours),i.textContent=o(e.minutes),u.textContent=o(e.seconds),(r<=1e3||s===!0)&&(clearInterval(t),a.textContent="00",c.textContent="00",i.textContent="00",u.textContent="00")},1e3);n.disabled=!0}
//# sourceMappingURL=commonHelpers.js.map