var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},n=e.parcelRequire7bc7;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},e.parcelRequire7bc7=n);var i=n("iQIUW");const r=document.querySelector(".form");function l(e,o,t){return new Promise(((n,i)=>{const r=Math.random()>.3,l=o+(e-1)*t;setTimeout((()=>{r?n({position:e,delay:l}):i({position:e,delay:l})}),l)}))}r.addEventListener("submit",(e=>{e.preventDefault();const o=e=>Number(r[e].value),t=o("delay"),n=o("step"),s=o("amount");for(let e=1;e<=s;e++)l(e,t,n).then((({position:e,delay:o})=>{i.Notify.success(`Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{i.Notify.failure(`Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.e9076ef0.js.map
