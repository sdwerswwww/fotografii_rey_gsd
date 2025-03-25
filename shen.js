document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');

    // Открытие лайтбокса при клике на картинку
    galleryItems.forEach(item => {
        item.addEventListener('click', function() {
            lightbox.style.display = 'flex';
            lightboxImg.src = this.querySelector('img').src;
        });
    });

    // Закрытие лайтбокса при клике на крестик
    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Закрытие лайтбокса при клике на затемненную область
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

