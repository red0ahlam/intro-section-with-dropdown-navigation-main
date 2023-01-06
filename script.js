

const mobile_trigger = document.querySelector('.mobile-menu-trigger');
const main_navigation = document.querySelector('#main-navigation');
const dropdown_trigger = document.querySelectorAll('.dropdown-trigger');
const dropdown_list = document.querySelectorAll('.dropdown-list');


mobile_trigger.addEventListener('click', () => {
    if (mobile_trigger.getAttribute("aria-expanded") === "false") {
        mobile_trigger.setAttribute("aria-expanded", "true");
        main_navigation.classList.add('slide-in');
    } else {
        mobile_trigger.setAttribute("aria-expanded", "false");
        main_navigation.classList.remove('slide-in');
    } 
})

dropdown_trigger.forEach((element) => {
    element.addEventListener('click', (e) => {
        if(e.target.nextElementSibling.getAttribute("data-visible") === "false"){
            e.target.nextElementSibling.setAttribute("data-visible", "true");
            e.target.setAttribute("aria-expanded", "true");
            
        }else{
            e.target.nextElementSibling.setAttribute("data-visible", "pending");
            e.target.setAttribute("aria-expanded", "false");
            e.target.nextElementSibling.addEventListener('animationend', (e) => {
                e.target.setAttribute("data-visible", "false");
            }, {once: true});
        }
    });
})

window.addEventListener('click', (e) => {
    let x = e.target;
    dropdown_list.forEach((list) => {
        if ((list.getAttribute("data-visible") == "true") && list != x && list.previousElementSibling != x) {
            list.setAttribute("data-visible", "false");
            list.previousElementSibling.setAttribute("aria-expanded", "false");
        }
    })
})
