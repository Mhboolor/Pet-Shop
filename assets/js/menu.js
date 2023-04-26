// Responsive Menu Code
let menu = document.querySelector('[data-menu]');
let menuBtns = document.querySelectorAll('[data-menu-btn]');
let backgroundMenu = document.querySelector('[data-menu-btn="background"]');

let addEvent = (element , event , callback) => {
    element.forEach(btn => {
        btn.addEventListener(event , callback);
    })
}

let menuToggle = () => {
    menu.classList.toggle('-translate-x-96');
    backgroundMenu.classList.toggle('hidden')
}

addEvent(menuBtns , 'click' , menuToggle);