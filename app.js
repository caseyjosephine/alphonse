const navSlide = () => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  menu.addEventListener('click',()=>{
    //Toggle nav
    nav.classList.toggle('nav-active');

    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .75}s`
      }
  });
  menu.classList.toggle('toggle');
});
}

navSlide();
