import {refs} from '../main'

export function imageTemplate(img) {
    const {webformatURL, largeImageURL, tags, likes, views, comments, downloads} = img;
    return `<li>
    <div class="card">
    <div class="img-container">
    <a href="${largeImageURL}">
    <img src="${webformatURL}" alt="${tags}" />
    </a>
    </div>
    <div class="img-comments">
    <p class="describe">Likes ${ likes }</p>
    <p class="describe">Views ${ views }</p>
    <p class="describe">Comments ${ comments }</p>
    <p class="describe">Downloads ${downloads}</p>
    </div>
    </div>
    </li>
    `;
}
export function imagesTemplate(images) {
    return images.map(imageTemplate).join('');
}
export function renderImages(images) {
    const markup = imagesTemplate(images) ;
    refs.galleryEl.insertAdjacentHTML('beforeend',markup);
    
};

