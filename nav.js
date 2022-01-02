const navBtns = document.querySelectorAll('[data-target]');
const menus = document.querySelectorAll('[data-menu]');
navBtns.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        menus.forEach(menu => {
            (menu.dataset.menu == btn.dataset.target) && menu.classList.remove('hide')
        });
    });
    btn.addEventListener('mouseleave', (e) => {
        menus.forEach(menu => {
            (menu.dataset.menu == btn.dataset.target) && menu.classList.add('hide')
        });
    });
});
menus.forEach(menu => {
    menu.addEventListener('mouseenter', e => {
        e.target.classList.remove('hide');
    });
    menu.addEventListener('mouseleave', e => {
        e.target.classList.add('hide');
    });
});