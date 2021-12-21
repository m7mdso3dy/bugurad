const headerAnimationField = document.querySelector('.header-animation-field');
const headertxt = 'Discover Your Weaknesses before they do !';
const headerSpeed = 70;
let headerExcuted = false;
let headeri = 0;
const headerTypewriter = () => {
    if (headeri < headertxt.length) {
    headerAnimationField.innerHTML += headertxt.charAt(headeri);
    headeri++;
    setTimeout(headerTypewriter, headerSpeed);
  }
}
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
/*about us animation*/
let i = 0;
const txt = 'expertise and demonstrated experience'; /* The text */
const speed = 50    ; /* The speed/duration of the effect in milliseconds */
const animationField = document.querySelector(".text-animation");
let excuted = false;
let once = false;
/* type writer animation*/
function typeWriter() {
  if (i < txt.length) {
    animationField.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
if (window.scrollY - animationField.offsetTop >= -500) {
         if (!once) {
             once = true;
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