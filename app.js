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

//night mode
document.addEventListener('DOMContentLoaded', (event) => {
  const toggleContainer = document.getElementById('toggleContainer');
  const body = document.body;

  // Check for saved user preference, if any, on load of the website
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
      body.classList.add(currentTheme);
  }

  toggleContainer.addEventListener('click', () => {
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');

      // Save the user's preference to local storage
      let theme = 'light-mode';
      if (body.classList.contains('dark-mode')) {
          theme = 'dark-mode';
      }
      localStorage.setItem('theme', theme);
  });
});

