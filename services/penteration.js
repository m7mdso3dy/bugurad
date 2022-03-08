const boxes = document.querySelectorAll('.box');
const bigImg = document.querySelector('.big-img');
boxes.forEach(box => {
    box.addEventListener('mouseover', () => {
        bigImg.classList.add('grayScale-0');
    });
    box.addEventListener('touchstart',() => {
        bigImg.classList.add('grayScale-0');
    })
    box.addEventListener('mouseleave', () => {
        bigImg.classList.remove('grayScale-0');
    })
    box.addEventListener('touchend', () => {
        bigImg.classList.remove('grayScale-0');
    })
})