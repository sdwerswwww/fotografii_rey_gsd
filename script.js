// Пример простой анимации при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    header.style.opacity = '0';
    setTimeout(() => {
        header.style.transition = 'opacity 1s ease';
        header.style.opacity = '1';
    }, 500);
});

