// gallery.js

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlay-image');

    // Load images dynamically
    const gallery = document.querySelector('.gallery');
    const images = [
        'asset/Ncc_images/img 0.jpg',
        'asset/Ncc_images/img 1.jpg',
        'asset/Ncc_images/img 2.jpg',
        'asset/Ncc_images/img 3.jpg',
        'asset/Ncc_images/img 4.jpg',
        'asset/Ncc_images/img 5.jpg',
        'asset/Ncc_images/img 6.jpg',
        'asset/Ncc_images/img 7.jpg',
        'asset/Ncc_images/img 8.jpg',
        'asset/Ncc_images/img 9.jpg',
        'asset/Ncc_images/img 10.jpg',
        'asset/Ncc_images/img 11.jpg',
        'asset/Ncc_images/img 12.jpg',
    ];

    images.forEach(src => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = 'NCC Event';
        gallery.appendChild(img);

        img.addEventListener('click', () => {
            overlayImage.src = src;
            overlay.style.display = 'flex';
        });
    });
    // Close overlay on click
    overlay.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
});



