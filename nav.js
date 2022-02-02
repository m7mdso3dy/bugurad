const navBtns = document.querySelectorAll('[data-target]');
const menus = document.querySelectorAll('[data-menu]');
const tabsBtns = document.querySelectorAll('[data-bs-toggle= "pill"]');
const tabsContent = document.querySelectorAll('[role="tabpanel"]');
const nav = document.querySelector('body > nav');
/*main nav btns*/
navBtns.forEach((btn,i) => {
    btn.addEventListener('mouseenter', (e) => {
        tabsBtns.forEach(btn => btn.classList.remove('active'));
        tabsContent.forEach(tab => {
                    tab.classList.remove('active');
                    tab.classList.remove('show');
                });
        tabsBtns[i * 2].classList.add('active');
        tabsContent[i * 2].classList.add('active');
        tabsContent[i * 2].classList.add('show');
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
/*tabs btns*/
tabsBtns.forEach(btn => {
    btn.addEventListener('mouseenter', (e) => {
        tabsBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        tabsContent.forEach(tab => {
            if(`#${tab.id}` == btn.dataset.bsTarget){
                tabsContent.forEach(tab => {
                    tab.classList.remove('active');
                    tab.classList.remove('show');
                });
                tab.classList.add('active');
                tab.classList.add('show');
            }
        })
    })
});

/*sticky nav*/
window.addEventListener('scroll', () => {
    window.pageYOffset > 100 ? nav.classList.add('black') : nav.classList.remove('black');
})