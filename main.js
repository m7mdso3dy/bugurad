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
if (window.pageYOffset >= whyChooseUs.offsetTop - 600) {
        animate();
    }
window.addEventListener('scroll', () => {
    if (window.pageYOffset >= whyChooseUs.offsetTop - 600) {
        animate();
    }
    
})