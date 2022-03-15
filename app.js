const burgerMenu = document.querySelector('.burger-menu')
const navMenu = document.querySelector('ul')
const navLink = document.querySelectorAll('ul li')

burgerMenu.addEventListener('click',()=> {
    navMenu.classList.toggle('menu-active')
    
    navLink.forEach((e) => {
        if (e.style.animation) {
            e.style.animation = ''
        }
        else {
            e.style.animation = `linkFade 0.5s ease forwards 1s`
        }
    })
    burgerMenu.classList.toggle('toggle')
})