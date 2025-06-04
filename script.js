function buyNow() {
  window.open("http://t.me/uchihaghost100_bot", "_blank");
}
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const menuIcon = document.getElementById('menu-icon');

  navLinks.classList.toggle('open');

  if (navLinks.classList.contains('open')) {
    menuIcon.textContent = '×';
  } else {
    menuIcon.textContent = '+';
  }
}







