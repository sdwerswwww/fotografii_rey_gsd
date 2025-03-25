// Анимация для меню
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.color = '#ffcc00';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.color = '#fff';
    });
});

// Анимация для прайс-листа
const priceItems = document.querySelectorAll('.price-item');
priceItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.2}s`; // Задержка для каждого элемента
});

