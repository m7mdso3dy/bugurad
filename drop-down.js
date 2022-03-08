if (document.querySelector('header section p')) {
    document.querySelector('header section p').innerHTML = 'Always One-Step Ahead!';
}




const links = document.querySelectorAll(' a');
const modalBtn = document.querySelector('.modal-btn');
const event1 = new Event('click');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        console.log(this)
        if (this.href.includes('#')) {
            console.log(modalBtn,event1)
            modalBtn.dispatchEvent(event1);
        } else {
            location.replace(this.href)
        }
    });
});