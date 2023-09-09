document.querySelector('.theme-toggle-button .theme-toggle').addEventListener('click', toggleTheme);

function toggleTheme() {
   const root = document.querySelector('.theme-toggle-button');
   if (root.classList.contains('dark')) {
      root.classList.remove('dark');
      root.classList.add('light');
   } else {
      root.classList.remove('light');
      root.classList.add('dark');
   }
}