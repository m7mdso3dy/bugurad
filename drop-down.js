/*
nav drop down
*/

const dropDownToggles = document.querySelectorAll('.dropdown-toggle');
const dropDowns = document.querySelectorAll('.dropdown');
dropDownToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        if (e.target.classList.value.includes('show')) {
            e.target.parentElement.style.overflow = "visible";
        }
        else {
            setTimeout(() => {
                e.target.parentElement.style.overflow = 'hidden';
            }, 500)
        }
    })
    console.log(toggle.parentElement)
});