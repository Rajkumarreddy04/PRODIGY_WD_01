const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  // Add a class to the navigation when scrolled to add a different style
  if (window.scrollY > 0) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});

// Add hover effect to individual menu items
const navLinks = navigation.querySelectorAll('a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.classList.add('hovered');
  });
  link.addEventListener('mouseout', () => {
    link.classList.remove('hovered');
  });
});
