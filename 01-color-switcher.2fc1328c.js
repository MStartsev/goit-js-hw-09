!function(){const t=document.body,e=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let n;e.addEventListener("click",(function(){n=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),o()})),d.addEventListener("click",(function(){clearInterval(n),o()}));const o=()=>{d.disabled=e.disabled,e.disabled=!e.disabled}}();
//# sourceMappingURL=01-color-switcher.2fc1328c.js.map