
// ========= menu show y Hidden ======== // 

const navMenu = document.getElementById('nav-menu'),
 navToggle = document.getElementById('nav-toggle'), 
 navClose = document.getElementById('nav-close');

// ======= Menu Show ========= //
//validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// ======= MENU HIDDEN ====== // 
// Validate if constants exists 
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });


//============ remove menu mobile ======= // 
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
}


// ============ QUALIFICATION TABS =======  // 

const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
});  

// =========== portfolio swiper ============== // 

let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// ======  !!! - portfolio - !!! - ANIMAÇÃO DA LISTA de experiencias ============= //

const tabMenu = document.querySelectorAll('.js-tabmenu > li');
const tabContent = document.querySelectorAll('.js-tabcontent > section');
    
    if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo');
    
    function activeTab(index) {
        tabContent.forEach((section) => {
            section.classList.remove('ativo');
        }); 
        tabContent[index].classList.add('ativo');
    }
    
    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            activeTab(index);
        })
    });
    }                

// ========== SERVICES MODAL =========== //

const modalViews = document.querySelectorAll('.services__modal'),
modalBtns = document.querySelectorAll('.services__button'),
modalCloses = document.querySelectorAll('.services__modal-close');

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
}


modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
       modalViews.forEach((modalView) => {
        modalView.classList.remove('active-modal');
       }) 
    })
})


// ====== active link ==== // 
//SCROLL SECTIONS ACTIVE LINK 
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

// ========== change background header ======= // 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the
    // header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


// ====== show scroll up ======== // 
function scrollUp(){
    const scrollup = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollup.classList.add('show-scroll'); else scrollup.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
