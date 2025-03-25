// Функция для открытия отзыва
function openReview(card) {
    const reviewerName = card.querySelector("p").textContent;
    alert(`Открыт отзыв от: ${reviewerName}`);
}

