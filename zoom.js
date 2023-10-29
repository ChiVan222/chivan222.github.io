const images = document.querySelectorAll('.itemBox');

images.forEach(image => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});