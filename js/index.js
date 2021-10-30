const menuButton = document.querySelector('.menu')
const navSide = document.querySelector('.nav')
const closeButton = document.querySelector('#close-button')
const firstTitle = document.querySelector('.first-title')
// const titleWatermark = document.querySelector('.title-watermark')
// const titleWatermarkScrolled = document.querySelector('.title-watermark--scrolled')
// const watermarkCompued = window.getComputedStyle(document.querySelector('.title-watermark'),':after');

const introNavItem = document.querySelector('#introNavLink')
const skillsNavLink = document.querySelector('#skillsNavLink')
const worksNavLink = document.querySelector('#worksNavLink')
const contactsNavLink = document.querySelector('#contactsNavLink')
const navItems = [introNavItem, skillsNavLink, worksNavLink, contactsNavLink]

const checkFull = function() {
    if (pageWidth < 700) {
        navSide.classList.remove('full')
    } else {
        navSide.classList.add('full')
    }
}

let pageHeight = document.documentElement.scrollHeight
let pageWidth = window.screen.width
checkFull()

window.addEventListener('resize', () => {

    pageHeight = document.documentElement.scrollHeight
    pageWidth = window.screen.width
    checkFull()
})


menuButton.addEventListener('click', () => {
    navSide.classList.add('unwrapped')
    navSide.classList.remove('full')

    if (navSide.classList.contains('unwrapped') &&
        !(navSide.classList.contains('full'))) {

        navItems.forEach( item => {
            item.addEventListener('click', () => {
                navSide.classList.remove('unwrapped')
            })
        })
    }
})

closeButton.addEventListener('click', () => {
    navSide.classList.remove('unwrapped')
})

document.addEventListener('scroll', () => {

    if (window.scrollY >= pageHeight/8 && window.scrollY < pageHeight/4) {
        introNavItem.classList.remove('selected')
        skillsNavLink.classList.add('selected')
        worksNavLink.classList.remove('selected')
        contactsNavLink.classList.remove('selected')
    } else if (window.scrollY >= pageHeight/4 && window.scrollY < pageHeight/1.4) {
        introNavItem.classList.remove('selected')
        skillsNavLink.classList.remove('selected')
        worksNavLink.classList.add('selected')
        contactsNavLink.classList.remove('selected')
    } else if (window.scrollY >= pageHeight/1.4) {
        introNavItem.classList.remove('selected')
        skillsNavLink.classList.remove('selected')
        worksNavLink.classList.remove('selected')
        contactsNavLink.classList.add('selected')
    } else if (window.scrollY <= pageHeight/8) {
        introNavItem.classList.add('selected')
        skillsNavLink.classList.remove('selected')
        worksNavLink.classList.remove('selected')
        contactsNavLink.classList.remove('selected')
    }
})
