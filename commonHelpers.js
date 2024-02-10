import{S as w,i as S,A as q}from"./assets/vendor-db5ad915.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=a(t);fetch(t.href,o)}})();function E(e){const{webformatURL:r,largeImageURL:a,tags:n,likes:t,views:o,comments:s,downloads:L}=e;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${a}">
    <img src="${r}" alt="${n}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${t}</p>
    <p class="describe">Views ${o}</p>
    <p class="describe">Comments ${s}</p>
    <p class="describe">Downloads ${L}</p>
    </div>
    </div>
    </li>
    `}function P(e){return e.map(E).join("")}function y(e){const r=P(e);i.galleryEl.insertAdjacentHTML("beforeend",r)}const i={formEl:document.querySelector(".form"),input:document.querySelector(".valueGallery"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};let m=1;const p=15;let d=0,l="";const g=new w(".gallery a",{captionsData:"alt",captionDelay:250});i.formEl.addEventListener("submit",$);u();async function $(e){if(e.preventDefault(),i.galleryEl.innerHTML="",f(),l=e.target.elements.valueGallery.value.trim(),!l){c("Sorry, there are no images matching your search query. Please try again!");return}if(l!==""){b(),m=1;try{const r=await v();r.hits.length>=1?(u(),y(r.hits),g.refresh(),r.hits.length<p?(f(),c("We're sorry, there are no more posts to load")):H()):(u(),c("Sorry, there are no images matching your search query. Please try again!"))}catch{d=0,h(d)}}e.target.reset()}i.btnLoad.addEventListener("click",B);async function B(){m+=1,b();const e=await v();y(e.hits),g.refresh(),h(e.totalHits),u();let a=2*document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:a,behavior:"smooth"})}function h(e){d=Math.ceil(e/p),d<=m&&(f(),c("We're sorry, there are no more posts to load"))}function c(e){return S.error({position:"topRight",color:"blue",message:e})}function b(){i.loader.style.visibility="visible"}function u(){i.loader.style.visibility="hidden"}function H(){i.btnLoad.style.visibility="visible"}function f(){i.btnLoad.style.visibility="hidden"}const O=q.create({baseURL:"https://pixabay.com/api/"});async function v(){return(await O.get("",{params:{key:"42132466-2eec74b8e2a534f613ea758a4",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:p,page:m}})).data}
//# sourceMappingURL=commonHelpers.js.map
