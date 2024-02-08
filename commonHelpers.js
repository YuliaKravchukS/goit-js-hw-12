import{i as m,A as p,S as f}from"./assets/vendor-db5ad915.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();const s={formEl:document.querySelector(".form"),input:document.querySelector("#valueGallery"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};let l=1;const y=15;s.formEl.addEventListener("submit",g);s.loader.style.visibility="hidden";async function g(r){r.preventDefault(),s.galleryEl.innerHTML="";const t=r.target.elements.valueGallery.value;t!==""&&(s.loader.style.visibility="visible");const a=await c(t);a.length>0&t!==""?(s.loader.style.visibility="hidden",d(a),l+=1,l>1&&(s.btnLoad.style.visibility="visible",s.btnLoad.addEventListener("click",async()=>{const o=await c(t);d(o),l+=1})),condition,t.addEventListener("change",()=>{s.btnLoad.style.visibility="hidden",l=1})):(s.loader.style.visibility="hidden",m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),r.target.reset()}const b=p.create({baseURL:"https://pixabay.com/api/"});async function c(r){return(await b.get("",{params:{key:"42132466-2eec74b8e2a534f613ea758a4",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:y,page:l}})).data.hits}function h(r){const{webformatURL:t,largeImageURL:a,tags:o,likes:e,views:i,comments:n,downloads:u}=r;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${a}">
    <img src="${t}" alt="${o}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${i}</p>
    <p class="describe">Comments ${n}</p>
    <p class="describe">Downloads ${u}</p>
    </div>
    </div>
    </li>
    `}function v(r){return r.map(h).join("")}function d(r){const t=v(r);s.galleryEl.insertAdjacentHTML("beforeend",t),new f(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
