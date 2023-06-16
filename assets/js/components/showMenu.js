function showMenu () {
    const nav = document.querySelector('.nav')
    const menu = document.querySelector('.nav__menu')

    nav.addEventListener('click', function (e){
        if (e.target.closest('.btn--menu')) {
            menu.classList.toggle('show--menu')
        }
        if (e.target.closest('.btn--close')) {
            menu.classList.toggle('show--menu')
        }
        if (e.target.closest('.btn__link')) {
            menu.classList.toggle('show--menu')
        }
    })
}

export default showMenu