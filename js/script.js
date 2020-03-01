const socialLinks = document.querySelectorAll('.socialLinks');
const aboutUsCard = document.querySelectorAll('.imgWrapper');
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menu')

if (window.innerWidth < 800) {
  // nav.classList.add('hide');
}
window.addEventListener('resize', function () {
  if (window.innerWidth < 800) {
    // nav.classList.add('hide');
  } else {
    // nav.classList.remove('hide');
  }
})

menuIcon.addEventListener('change', function () {
  if (menuIcon.checked) {
    nav.style = "top: 0%; transition: all 300ms linear;"
  } else {
    nav.style = "top: -100%; transition: all 300ms linear;"
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


