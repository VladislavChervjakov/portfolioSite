let pages = document.querySelectorAll('.content-slider__navigation-page');
let screenWidth = window.screen.width;
let slides = document.querySelectorAll('.content-slider__slide');
let worksLeftButton = document.querySelector('.works__slider-left');
let worksRightButton = document.querySelector('.works__slider-right');
let hireUsLabels = document.querySelectorAll('.hire-us__label');
let burger = document.querySelector('.burger');
let headerMenu = document.querySelector('.menu');
let menuItems = document.querySelectorAll('.menu__item');
function marginsPages(){
    for(let i = 1; i <= pages.length + 1; i++){
        if(screenWidth <= 1368){
            pages[i].style.top += 100 * i + 'px';
        } else if(screenWidth <= 1600){
            pages[i].style.top += 150 * i + 'px';
        }
        else{
            pages[i].style.top += 200 * i + 'px';
        }
    }
}

function refreshSlder(){
    for(let i = 0; i < slides.length; i++){
        slides[i].classList.remove('content-slider__slide-active');
        pages[i].classList.remove('content-slider__navigation-page-active');
        pages[i].firstElementChild.classList.remove('content-slider__navigation-page-name-active');
        pages[i].lastElementChild.classList.remove('content-slider__navigation-page-number-active');
    }
}

function slider(){
    for(let i = 0; i < pages.length; i++){
        pages[i].onclick = function(){
            refreshSlder();
            slides[i].classList.add('content-slider__slide-active');
            pages[i].classList.add('content-slider__navigation-page-active');
            pages[i].firstElementChild.classList.add('content-slider__navigation-page-name-active');
            pages[i].lastElementChild.classList.add('content-slider__navigation-page-number-active');
        }
    }
    document.onwheel = function(event){
       let active = document.querySelector('.content-slider__slide-active');
       let pageActive = document.querySelector('.content-slider__navigation-page-active');
       let delta = event.deltaY;
       console.log(delta);
      
        if(delta < 0){
            if(active.previousElementSibling !== null && 
                !pageActive.previousElementSibling.classList.contains('content-slider__line')){
                pageActive.classList.remove('content-slider__navigation-page-active');
                pageActive.firstElementChild.classList.remove('content-slider__navigation-page-name-active');
                pageActive.lastElementChild.classList.remove('content-slider__navigation-page-number-active');
                pageActive.previousElementSibling.classList.add('content-slider__navigation-page-active');
                pageActive.previousElementSibling.firstElementChild.classList.add('content-slider__navigation-page-name-active');
                pageActive.previousElementSibling.lastElementChild.classList.add('content-slider__navigation-page-number-active');
                pageActive = pageActive.previousElementSibling;
                active.classList.remove('content-slider__slide-active');
                active.previousElementSibling.classList.add('content-slider__slide-active');
                active = active.previousElementSibling;
            }
           else{
               pageActive = pages[pages.length - 1].classList.add('content-slider__navigation-page-active');
               pages[pages.length - 1].firstElementChild.classList.add('content-slider__navigation-page-name-active');
               pages[pages.length - 1].lastElementChild.classList.add('content-slider__navigation-page-number-active');
               pages[0].classList.remove('content-slider__navigation-page-active');
               pages[0].firstElementChild.classList.remove('content-slider__navigation-page-name-active');
               pages[0].lastElementChild.classList.remove('content-slider__navigation-page-number-active');
               active = slides[slides.length - 1].classList.add('content-slider__slide-active');
               slides[0].classList.remove('content-slider__slide-active');
            }
        } else{
            if(active.nextElementSibling !== null){
                pageActive.classList.remove('content-slider__navigation-page-active');
                pageActive.firstElementChild.classList.remove('content-slider__navigation-page-name-active');
                pageActive.lastElementChild.classList.remove('content-slider__navigation-page-number-active');
                pageActive.nextElementSibling.classList.add('content-slider__navigation-page-active');
                pageActive.nextElementSibling.firstElementChild.classList.add('content-slider__navigation-page-name-active');
                pageActive.nextElementSibling.lastElementChild.classList.add('content-slider__navigation-page-number-active');
                pageActive = pageActive.nextElementSibling;
                active.classList.remove('content-slider__slide-active');
                active.nextElementSibling.classList.add('content-slider__slide-active');
                active = active.nextElementSibling;
            }
           else{
               pageActive = pages[0].classList.add('content-slider__navigation-page-active');
               pages[pages.length - 1].classList.remove('content-slider__navigation-page-active');
               pages[0].firstElementChild.classList.add('content-slider__navigation-page-name-active');
               pages[0].lastElementChild.classList.add('content-slider__navigation-page-number-active');
               pages[pages.length - 1].firstElementChild.classList.remove('content-slider__navigation-page-name-active');
               pages[pages.length - 1].lastElementChild.classList.remove('content-slider__navigation-page-number-active');
               active = slides[0].classList.add('content-slider__slide-active');
               slides[slides.length - 1].classList.remove('content-slider__slide-active');
            }
        }
    }
}

function sliderWorks(){
   
    worksRightButton.onclick = function(){
        let left = document.querySelector(".works__slide-item-left");
        let right = document.querySelector(".works__slide-item-right");
        let center =  document.querySelector(".works__slide-item-center");
        center.classList.remove('works__slide-item-center');
        center.classList.add('works__slide-item-left');
        left.classList.remove('works__slide-item-left');
        left.classList.add('works__slide-item-right');
        right.classList.remove('works__slide-item-right');
        right.classList.add('works__slide-item-center');
    }
    worksLeftButton.onclick = function(){
        let left = document.querySelector(".works__slide-item-left");
        let right = document.querySelector(".works__slide-item-right");
        let center =  document.querySelector(".works__slide-item-center");
        center.classList.remove('works__slide-item-center');
        center.classList.add('works__slide-item-right');
        left.classList.remove('works__slide-item-left');
        left.classList.add('works__slide-item-center');
        right.classList.remove('works__slide-item-right');
        right.classList.add('works__slide-item-left');
    }
}

function hireUsLabelsHover(){
    for(let i = 0; i < hireUsLabels.length; i++){
        hireUsLabels[i].onclick = function(){
            hireUsLabels[i].classList.toggle('hire-us__label-active');
        };
    }
}

function menu(){
    burger.onclick = function(){
        headerMenu.classList.toggle('header__menu-active');
        burger.classList.toggle('burger-close');
    };
    for(let i = 0; i < menuItems.length; i++){
        menuItems[i].onclick = function(){
            let active = document.querySelector('.content-slider__slide-active');
            let pageActive = document.querySelector('.content-slider__navigation-page-active');
            headerMenu.classList.remove('header__menu-active');
            burger.classList.remove('burger-close');
            active.classList.remove('content-slider__slide-active');
            slides[i].classList.add('content-slider__slide-active');
            active = slides[i];
            pageActive.classList.remove('content-slider__navigation-page-active');
            pages[i].classList.add('content-slider__navigation-page-active');
            pageActive.firstElementChild.classList.remove('content-slider__navigation-page-name-active');
            pageActive.lastElementChild.classList.remove('content-slider__navigation-page-number-active');
            pages[i].firstElementChild.classList.add('content-slider__navigation-page-name-active');
            pages[i].lastElementChild.classList.add('content-slider__navigation-page-number-active');
            pageActive = pages[i];
        };
    }
}

slider();
menu();
hireUsLabelsHover();
sliderWorks();
marginsPages();

