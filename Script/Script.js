let headerBtn = document.querySelector('.header__btn');
let headerNavList = document.querySelector('.header-nav__list');

headerBtn.addEventListener('click', function (e) {
    e.preventDefault;
    if(!this.classList.contains('active')){
        this.classList.add('active')
        headerNavList.classList.add('active')
    }
    else{
        this.classList.remove('active')
        headerNavList.classList.remove('active')
    }
})