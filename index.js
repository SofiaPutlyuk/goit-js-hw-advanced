
const imgobserve = new IntersectionObserver((entries) => {
    entries.forEach((photo) => {
        if (photo.isIntersecting) {
            const img = photo.target
            img.src = img.dataset.src;
            //Заповнювач
            img.addEventListener('load', () => {
                img.style.display = 'block';
                img.parentElement.style.background = 'none';
            });
            imgobserve.unobserve(img)

        }

    })
})
const searchPhoto = document.querySelectorAll('img')
searchPhoto.forEach(img2 => {
    imgobserve.observe(img2)
})