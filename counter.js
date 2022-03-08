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
    countUp(counters[0], 1000, 500000, 1);  // we need faster
    countUp(counters[1], 2, 2998, 0.03);
    countUp(counters[2], 2, 1498, 0.03);
    countUp(counters[3], 1000000, 100000000, 1); // we need faster
    countUp(counters[4], 2, 90, 3);
    countUp(counters[5], 2, 400, 2);
}


function countUp(selector, min, max, duration) {
    let inter = setInterval(function () {
        selector.innerHTML = + Math.round(min);
        min = min + max/500 ;
        if (selector.innerHTML >= max) {
            clearTimeout(inter);
        }
    }, duration);
}