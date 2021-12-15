/*counter animation*/
const statics = document.querySelector('.statics');
const counters = document.querySelectorAll('.statics>.container .card-body>h3');
let fired = false;
if (window.pageYOffset >= statics.offsetTop - 500 && fired === false) {
        Counter();
        fired = true;
    }
window.addEventListener("scroll", function () {
    if (window.pageYOffset >= statics.offsetTop - 500 && fired === false) {
        Counter();
        fired = true;
    }
}, true);

function Counter() {
    // achievements.style.display = "flex";
    countUp(counters[0], 0, 900, 3);
    countUp(counters[1], 0, 25, 100);
    countUp(counters[2], 0, 300, 3);
    countUp(counters[3], 0, 850, 3);
    countUp(counters[4], 0, 7, 100);
    countUp(counters[5], 0, 700, 2);
}


function countUp(selector, min, max, duration) {
    let inter = setInterval(function () {
        selector.innerHTML = ++min;
        if (min >= max) {
            clearTimeout(inter);
        }
    }, duration);
}