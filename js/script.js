const socialLinks = document.querySelectorAll('.socialLinks');
const aboutUsCard = document.querySelectorAll('.imgWrapper');
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menu')
const menuBarOne = document.querySelector('#spanOne');
const menuBarTwo = document.querySelector('#spanTwo');

if (window.innerWidth < 800) {
  nav.classList.add('hide');
}
window.addEventListener('resize', function () {

  if (window.innerWidth < 800) {
    nav.classList.add('hide');
  } else {
    nav.classList.remove('hide');
  }
})

menuIcon.addEventListener('change', function () {
  if (menuIcon.checked) {
    nav.style = "top: 0%; transition: all 300ms linear;"
    menuBarOne.style = 'transform: rotate(45deg); top: 13px; transition: transform 100ms linear';
    menuBarTwo.style = 'transform: rotate(135deg); top: 10px;  transition: transform 100ms linear';
  } else {
    nav.style = "top: -100%; transition: all 300ms linear;"
    menuBarOne.style = 'transform: rotate(0deg); top: 7px; transition: transform 100ms linear';
    menuBarTwo.style = 'transform: rotate(0deg); top: 20px; transition: transform 100ms linear';
  }
})
console.log('hello');
for (let i = 0; i < aboutUsCard.length; i++) {
  socialLinks[i].addEventListener('mouseenter', function () {
    console.log(i);
    socialLinks[i].style = 'opacity: 1; transition: opacity 200ms linear';
  })
  socialLinks[i].addEventListener('mouseleave', function () {
    console.log(i);
    socialLinks[i].style = 'opacity: 0; transition: opacity 200ms linear';

  })
}


