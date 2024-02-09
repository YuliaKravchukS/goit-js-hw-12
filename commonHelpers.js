import{i as u,A as h,S as b}from"./assets/vendor-db5ad915.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const r={formEl:document.querySelector(".form"),input:document.querySelector(".valueGallery"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};let d=1;const m=15;let c=0,n="";r.formEl.addEventListener("submit",v);r.loader.style.visibility="hidden";async function v(t){t.preventDefault(),r.galleryEl.innerHTML="",r.btnLoad.style.visibility="hidden",n=t.target.elements.valueGallery.value.trim(),n!==""&&(r.loader.style.visibility="visible"),d=1;try{const o=await y();o.hits.length>0&n!==""?(r.loader.style.visibility="hidden",p(o.hits),r.btnLoad.style.visibility="visible"):(r.loader.style.visibility="hidden",u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))}catch{c=0,f(c)}t.target.reset()}const L=h.create({baseURL:"https://pixabay.com/api/"});async function y(){return(await L.get("",{params:{key:"42132466-2eec74b8e2a534f613ea758a4",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:d}})).data}function w(t){const{webformatURL:o,largeImageURL:s,tags:l,likes:e,views:i,comments:a,downloads:g}=t;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${s}">
    <img src="${o}" alt="${l}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${i}</p>
    <p class="describe">Comments ${a}</p>
    <p class="describe">Downloads ${g}</p>
    </div>
    </div>
    </li>
    `}function S(t){return t.map(w).join("")}function p(t){const o=S(t);r.galleryEl.insertAdjacentHTML("beforeend",o),new b(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}r.btnLoad.addEventListener("click",q);async function q(){d+=1,r.loader.style.visibility="visible";const t=await y();p(t.hits),f(t.totalHits),r.loader.style.visibility="hidden";let s=2*document.querySelector(".card").getBoundingClientRect().height;window.scrollBy({top:s,behavior:"smooth"})}function f(t){if(c=Math.ceil(t/m),c<=d)return r.btnLoad.style.visibility="hidden",u.error({position:"topRight",color:"blue",message:"We're sorry, there are no more posts to load"})}
//# sourceMappingURL=commonHelpers.js.map
