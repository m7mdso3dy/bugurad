
/*
header animation
*/
const headerAnimationField = document.querySelector('.header-animation-field');
const headertxt = 'Discover Your Weaknesses before the hackers do!';
const headerSpeed = 65;
let headerExcuted = false;
let headeri = 0;
const headerTypewriter = () => {
    if (headeri < headertxt.length) {
    headerAnimationField.innerHTML += headertxt.charAt(headeri);
    headeri++;
    setTimeout(headerTypewriter, headerSpeed);
  }
}
window.addEventListener('load', () => {
    if (window.scrollY - headerAnimationField.offsetTop >= -500) {
         if (!headerExcuted) {
             headerExcuted = true;
             headerTypewriter();
         }
     }
 document.addEventListener('scroll', () => {
     if (window.scrollY - headerAnimationField.offsetTop >= -500) {
         if (!headerExcuted) {
             headerExcuted = true;
             headerTypewriter();
         }
     }  
 });
})
/*about us animation*/
let i = 0;
const txt = ['Trusted Security Vendor!','this second paragraph','this fourth paragraph']; /* The text */
const speed = 1000   ; /* The speed/duration of the effect in milliseconds */
const animationField = document.querySelector(".text-animation");
let excuted = false;
let once = false;
/* type writer animation*/
const texts = ['Trusted Security Vendor!', 'this second paragraph', 'this fourth paragraph']; /* The text */
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function typeWriter() {
    if (count == texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    animationField.textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
    setTimeout(typeWriter, 100);
}
if (window.scrollY - animationField.offsetTop >= -500) {
         if (!once) {
             once = true;
             console.log('we are here')
             typeWriter();
         }
     }
 document.addEventListener('scroll', () => {
     if (window.scrollY - animationField.offsetTop >= -500) {
         if (!once) {
             once = true;
             typeWriter();
         }
     }  
 });
/*
window.pageYOffset >= statics.offsetTop - 200
why chosse us animation*/
const whyChooseUs = document.querySelector('.whychooseus')
const medals = document.querySelectorAll('.whychooseus > .container > .row > .card');
const animate = () => {
    medals[0].classList.add('medals-1-3-animate');
    medals[2].classList.add('medals-1-3-animate');
    medals[1].classList.add('medals-2-animate');

}
if (window.pageYOffset >= whyChooseUs.offsetTop - 300) {
        animate();
    }
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= whyChooseUs.offsetTop - 300) {
        animate();
    }
    
})