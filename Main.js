const menu = document.querySelector('.nav-body-sm')
const navBtn = document.querySelector('.nav-btn')
const scrollBtn = document.querySelector('.scroll-btn')


const toggleMenu = () => {
    menu.classList.toggle("open")
    navBtn.classList.toggle("open")
}


window.onscroll = () => {
    if (window.scrollY > 500) {
        scrollBtn.style.opacity = "1";
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.opacity = "0";
        scrollBtn.style.visibility = "hidden";
    }
}

scrollBtn.onclick = () => {
    scrollTo(0, 0, 'smooth')
}