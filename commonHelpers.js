import{i as c,A as f,S as y}from"./assets/vendor-db5ad915.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const o={formEl:document.querySelector(".form"),input:document.querySelector("#valueGallery"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};let l=1;const m=15,g=Math.ceil(500/m);o.formEl.addEventListener("submit",b);o.loader.style.visibility="hidden";async function b(i){i.preventDefault(),o.galleryEl.innerHTML="";const t=i.target.elements.valueGallery.value;t!==""&&(o.loader.style.visibility="visible");const s=await d(t);s.length>0&t!==""?(o.loader.style.visibility="hidden",u(s),l+=1,l>1&&(o.btnLoad.style.visibility="visible",o.btnLoad.addEventListener("click",async()=>{if(l>g)return c.error({position:"bottomRight",color:"blue",message:"We're sorry, there are no more posts to load"});const a=await d(t);u(a),l+=1}))):(o.loader.style.visibility="hidden",c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),i.target.reset()}const h=f.create({baseURL:"https://pixabay.com/api/"});async function d(i){return(await h.get("",{params:{key:"42132466-2eec74b8e2a534f613ea758a4",q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:m,page:l}})).data.hits}function v(i){const{webformatURL:t,largeImageURL:s,tags:a,likes:e,views:r,comments:n,downloads:p}=i;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${s}">
    <img src="${t}" alt="${a}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${r}</p>
    <p class="describe">Comments ${n}</p>
    <p class="describe">Downloads ${p}</p>
    </div>
    </div>
    </li>
    `}function L(i){return i.map(v).join("")}function u(i){const t=L(i);o.galleryEl.insertAdjacentHTML("beforeend",t),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
