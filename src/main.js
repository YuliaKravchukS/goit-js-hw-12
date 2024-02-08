'use strict'

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import Axios from "axios";


const refs = {
    formEl: document.querySelector('.form'),
    input: document.querySelector('#valueGallery'),
    galleryEl: document.querySelector('.gallery'),
    loader: document.querySelector('.loader'),
    btnLoad: document.querySelector('.btn-load'),
    
}

let _page = 1;
const limit = 15;
const totalPages = Math.ceil(500/ limit);

refs.formEl.addEventListener('submit', onFormSubmit);
refs.loader.style.visibility = 'hidden';


async function onFormSubmit(e) {
    e.preventDefault();
    refs.galleryEl.innerHTML = '';
    const value = e.target.elements.valueGallery.value;
    if (value !== '') {
        refs.loader.style.visibility = 'visible';
    }  
    const data = await getUrl(value);
        if (data.length > 0 & value !== '') {
            refs.loader.style.visibility = 'hidden';
            renderImages(data);
            _page += 1;
            
            if (_page > 1) {
                refs.btnLoad.style.visibility = 'visible';
                refs.btnLoad.addEventListener('click', async () => {

            if (_page > totalPages) {
            return iziToast.error({
                position: "bottomRight",
                color: 'blue',
                message: "We're sorry, there are no more posts to load"
            });
            
        };
                    const data = await getUrl(value);
                    renderImages(data);
                    _page += 1;
                });
            }
        } else {
            refs.loader.style.visibility = 'hidden';
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            })
        }
        
    e.target.reset();
};


const axios = Axios.create({
    baseURL: 'https://pixabay.com/api/',
    
})
async function getUrl(clientValue) {

    const response =await axios.get('',{params: {
        key: '42132466-2eec74b8e2a534f613ea758a4',
        q: clientValue,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: limit,
        page: _page,
        
        
    }
    });
    
    return response.data.hits;

}



function imageTemplate(img) {
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


function imagesTemplate(images) {
    return images.map(imageTemplate).join('');
}
function renderImages(images) {
    const markup = imagesTemplate(images) ;
    refs.galleryEl.insertAdjacentHTML('beforeend',markup);
    let simpleLightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 }).refresh();
};