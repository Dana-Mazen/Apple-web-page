let lastScrollY = window.scrollY; //for vertical position 
const navbar = document.getElementById('navbar');
//new comment
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    //when scroll down hides nav
    navbar.style.transform = 'translateY(-100%)';
  } else {
    navbar.style.transform = 'translateY(0)';  //el 3aks
  }
  lastScrollY = window.scrollY;
});