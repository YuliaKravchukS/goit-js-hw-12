import{i as u,A as b,S as h}from"./assets/vendor-db5ad915.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function d(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=d(e);fetch(e.href,i)}})();const r={formEl:document.querySelector(".form"),input:document.querySelector(".valueGallery"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};let c=1;const m=15;let n=0,l="";r.formEl.addEventListener("submit",v);r.loader.style.visibility="hidden";async function v(t){t.preventDefault(),r.galleryEl.innerHTML="",r.btnLoad.style.visibility="hidden",l=t.target.elements.valueGallery.value.trim(),l!==""&&(r.loader.style.visibility="visible"),c=1;try{const s=await y();s.hits.length>0&l!==""?(r.loader.style.visibility="hidden",p(s.hits),r.btnLoad.style.visibility="visible"):(r.loader.style.visibility="hidden",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch{n=0,f(n)}t.target.reset()}const L=b.create({baseURL:"https://pixabay.com/api/"});async function y(){return(await L.get("",{params:{key:"42132466-2eec74b8e2a534f613ea758a4",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:c}})).data}function w(t){const{webformatURL:s,largeImageURL:d,tags:a,likes:e,views:i,comments:o,downloads:g}=t;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${d}">
    <img src="${s}" alt="${a}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${i}</p>
    <p class="describe">Comments ${o}</p>
    <p class="describe">Downloads ${g}</p>
    </div>
    </div>
    </li>
    `}function S(t){return t.map(w).join("")}function p(t){const s=S(t);r.galleryEl.insertAdjacentHTML("beforeend",s),new h(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}r.btnLoad.addEventListener("click",q);async function q(){c+=1,r.loader.style.visibility="visible";const t=await y();p(t.hits),f(t.totalHits),r.loader.style.visibility="hidden"}function f(t){if(n=Math.ceil(t/m),n<=c)return r.btnLoad.style.visibility="hidden",u.error({position:"topRight",color:"blue",message:"We're sorry, there are no more posts to load"})}
//# sourceMappingURL=commonHelpers.js.map
