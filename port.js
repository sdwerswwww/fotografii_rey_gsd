// Анимация для меню
const menuItems = document.querySelectorAll('.menu a');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.color = '#ffcc00'; // Изменение цвета при наведении
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
        item.style.color = '#fff'; // Возврат к исходному цвету
    });
});

