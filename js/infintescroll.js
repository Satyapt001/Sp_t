// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scrollContent = document.querySelector('.scroll-content');
    const scrollItems = document.querySelectorAll('.scroll-item');

    // Clone the scroll items and append them to the scroll content
    scrollItems.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContent.appendChild(clone);
    });
});
