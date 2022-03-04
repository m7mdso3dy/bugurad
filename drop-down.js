document.querySelector('header section p').innerHTML = 'Discover your weakness before they do';

const links = document.querySelectorAll('nav a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log(this)
        if (this.href.includes('#')) {
            location.replace('/underconstruction.html')
        } else {
            location.replace(this.href)
        }
    });
})