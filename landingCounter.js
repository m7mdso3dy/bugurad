// /*counter animation*/
// const achives = document.querySelector('.achives');
// const counters = document.querySelectorAll('.achive .achiveNum');
// let fired = false;
// window.addEventListener('load', () => {
//     if (window.pageYOffset >= achives.offsetTop - 500 && fired === false) {
//         Counter();
//         fired = true;
//     }
// window.addEventListener("scroll", function () {
//     if (window.pageYOffset >= achives.offsetTop - 500 && fired === false) {
//         Counter();
//         fired = true;
//     }
// }, true);
// })

// function Counter() {
//     // achievements.style.display = "flex";
//     countUp(counters[0], 0, 24, 75);
//     countUp(counters[1], 0, 50, 50);
//     countUp(counters[2], 0, 80, 25);
// }


// function countUp(selector, min, max, duration) {
//     let inter = setInterval(function () {
//         selector.innerHTML = ++min;
//         if (min >= max) {
//             clearTimeout(inter);
//         }
//     }, duration);
// }