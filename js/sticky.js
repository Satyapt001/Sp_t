document.addEventListener('DOMContentLoaded', function() {
    const navBar = document.getElementById('NavBar');

    window.addEventListener('scroll', function() {
        const rect = navBar.getBoundingClientRect();
        if (rect.top <= 0) {
            navBar.classList.add('sticky');
        } else {
            navBar.classList.remove('sticky');
        }
    });

    const hamMenu = document.querySelector('.ham-menu');
    const offScreenMenu = document.querySelector('.off-screen-menu');

    hamMenu.addEventListener('click', function() {
        offScreenMenu.classList.toggle('active');
    });
});
