const socialLinks = document.querySelectorAll('.socialLinks');
const aboutUsCard = document.querySelectorAll('.imgWrapper');
const nav = document.querySelector('nav');
const menuIcon = document.querySelector('.menuCheckbox');
const menuBars = document.querySelectorAll('span');
const menuBarOne = document.querySelector('#spanOne');
const menuBarTwo = document.querySelector('#spanTwo');

// hide nav on tablet + phone view
if (window.innerWidth < 800) {
  nav.classList.add('hide');
}

// toggle menuIcon + hide nav if window.width < 800
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

// toggle nav menu items when menuIcon has been clicked
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

// scroll in testimonial when it's in view
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 1200) {
    document.querySelectorAll('.testimonialsCard').forEach(x => {
      x.style = 'top: 0; opacity: 1; transition: all 600ms ease-in-out;';
    })
  }
})

// display professional profile links on team image hover
for (let i = 0; i < aboutUsCard.length; i++) {
  socialLinks[i].addEventListener('mouseenter', function () {
    socialLinks[i].style = 'opacity: 1; transition: opacity 200ms linear';
  })
  socialLinks[i].addEventListener('mouseleave', function () {
    socialLinks[i].style = 'opacity: 0; transition: opacity 200ms linear';

  })
}




