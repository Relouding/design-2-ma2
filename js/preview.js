function previewFullscreen() {}
const imgs = document.querySelectorAll('.main__content img');
const fullPage = document.querySelector('#preview');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});