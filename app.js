//menuBar
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});

//making the navBar stick
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

//infinite scroll
document.addEventListener('DOMContentLoaded', () => {
  const scrollContent = document.querySelector('.scroll-content');
  const scrollItems = document.querySelectorAll('.scroll-item');

  // Clone the scroll items and append them to the scroll content
  scrollItems.forEach(item => {
      const clone = item.cloneNode(true);
      scrollContent.appendChild(clone);
  });
});

