const socialLinks = [...document.querySelectorAll('.socialLinks')];
const aboutUsCard = [...document.querySelectorAll('.imgWrapper')];

console.log(aboutUsCard);

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


console.log("hello");