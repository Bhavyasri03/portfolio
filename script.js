function showSection(sectionId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => page.classList.remove('active'));

  document.getElementById(sectionId).classList.add('active');

  // Active nav highlight
  const links = document.querySelectorAll('nav a');
  links.forEach(link => link.classList.remove('active-link'));

  const activeLink = document.querySelector(`nav a[onclick*="${sectionId}"]`);
  if (activeLink) activeLink.classList.add('active-link');
}

// Mobile menu toggle
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('show');
}

// Close menu + navigate
function navigate(sectionId) {
  showSection(sectionId);
  document.getElementById('nav-links').classList.remove('show');
}
