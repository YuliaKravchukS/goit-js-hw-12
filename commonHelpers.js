import{i as d,A as f,S as y}from"./assets/vendor-db5ad915.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const o={formEl:document.querySelector(".form"),input:document.querySelector(".valueGallery"),galleryEl:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnLoad:document.querySelector(".btn-load")};let l=1;const g=15;let a="";console.log(a);o.formEl.addEventListener("submit",b);o.loader.style.visibility="hidden";async function b(t){t.preventDefault(),o.galleryEl.innerHTML="",a=t.target.elements.valueGallery.value.trim(),a!==""&&(o.loader.style.visibility="visible"),l=1;const i=await u();i.hits.length>0&a!==""?(o.loader.style.visibility="hidden",m(i.hits),o.btnLoad.style.visibility="visible"):(o.loader.style.visibility="hidden",d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})),t.target.reset()}const h=f.create({baseURL:"https://pixabay.com/api/"});async function u(){return(await h.get("",{params:{key:"42132466-2eec74b8e2a534f613ea758a4",q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:g,page:l}})).data}function v(t){const{webformatURL:i,largeImageURL:c,tags:n,likes:e,views:r,comments:s,downloads:p}=t;return`<li>
    <div class="card">
    <div class="img-container">
    <a href="${c}">
    <img src="${i}" alt="${n}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${e}</p>
    <p class="describe">Views ${r}</p>
    <p class="describe">Comments ${s}</p>
    <p class="describe">Downloads ${p}</p>
    </div>
    </div>
    </li>
    `}function L(t){return t.map(v).join("")}function m(t){const i=L(t);o.galleryEl.insertAdjacentHTML("beforeend",i),new y(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}o.btnLoad.addEventListener("click",w);async function w(){l+=1;const t=await u();m(t.hits),S(t.totalHits)}function S(t){if(l>t)return d.error({position:"bottomRight",color:"blue",message:"We're sorry, there are no more posts to load"})}
//# sourceMappingURL=commonHelpers.js.map
