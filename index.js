const galleryItems = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
  ];
  let currentIndex = -1;
  const searchGallery = document.querySelector('.gallery')
  const searchLightbox = document.querySelector('.lightbox__content')
  const searchImgLightbox = searchLightbox.querySelector('img')
  const searchOverlay = document.querySelector('.lightbox__overlay')
  const searchLight = document.querySelector('.lightbox')
  const searchButtonClose = document.querySelector('button[data-action="close-lightbox"]')
  console.log(searchImgLightbox)
  galleryItems.forEach((photo,index) => {
    const createList = document.createElement('li')
    const createImg = document.createElement('img')
    createImg.src = photo.preview
    createImg.alt = photo.description
   createList.classList.add('gallery__item')
    const createLink = document.createElement('a')
   createLink.href = photo.original
    createLink.classList.add('gallery__link')
   createImg.classList.add('gallery__image')
   createImg.setAttribute('data-source', photo.original);
    createList.appendChild(createImg)
    createList.appendChild(createLink)
    searchGallery.appendChild(createList)
    createImg.setAttribute('data-index',index)
    
  })
searchGallery.addEventListener('click',function(event){
 const click = event.target
    if(click.tagName === "IMG"){
        const searchImg = click.getAttribute('data-index')
        const imgSearch = galleryItems[searchImg]
      if(imgSearch){
         searchImgLightbox.src = imgSearch.original
        searchImgLightbox.alt = imgSearch.description
         searchLight.classList.add('is-open')
       
      }

    console.log(searchImg)
   
 }
  
})
searchButtonClose.addEventListener('click',function(){
   
    searchLight.classList.remove('is-open')
})
document.addEventListener('keydown',function(event){
    if(event.key==="Escape"){
        searchLight.classList.remove('is-open')
    }
    if (searchLight.classList.contains('is-open')) {
        if (event.key === "ArrowRight") {
          showNextImage();
        } else if (event.key === "ArrowLeft") {
          showPreviousImage();
        }
      }
    
})
function showNextImage() {
    currentIndex = (currentIndex + 1) % galleryItems.length; 
    updateLightboxImage();
  }
function showPreviousImage() {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateLightboxImage();
  }
  function updateLightboxImage() {
    if (currentIndex >= 0 && currentIndex < galleryItems.length) {
      const imgSearch = galleryItems[currentIndex];
      searchImgLightbox.src = imgSearch.original;
      searchImgLightbox.alt = imgSearch.description;
    }
  }  
searchOverlay.addEventListener('click',function(){
    searchLight.classList.remove('is-open')
})