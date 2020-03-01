const socialLinks = document.querySelectorAll('.socialLinks');
const aboutUsCard = document.querySelectorAll('.imgWrapper');
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menuCheckbox');
const menuBars = document.querySelectorAll('span');
const menuBarOne = document.querySelector('#spanOne');
const menuBarTwo = document.querySelector('#spanTwo');

if (window.innerWidth < 800) {
  nav.classList.add('hide');
}
window.addEventListener('resize', function () {
  menuBars.forEach(x => {
    x.classList.remove('checked');
  })
  menuIcon.checked = false;


  if (window.innerWidth < 800) {
    nav.style.display = 'none';
  } else {
    nav.style.top = "0%";
    nav.style.display = "flex";
  }
})

menuIcon.addEventListener('change', function () {
  if (menuIcon.checked) {
    nav.style = "top: 0%; transition: all 300ms linear;"
    menuBars.forEach(x => {
      x.classList.add('checked');
    })
  } else {
    nav.style = "top: -100%; transition: all 300ms linear;"
    menuBars.forEach(x => {
      x.classList.remove('checked');
    })
  }
})

for (let i = 0; i < aboutUsCard.length; i++) {
  socialLinks[i].addEventListener('mouseenter', function () {
    socialLinks[i].style = 'opacity: 1; transition: opacity 200ms linear';
  })
  socialLinks[i].addEventListener('mouseleave', function () {
    socialLinks[i].style = 'opacity: 0; transition: opacity 200ms linear';

  })
}


