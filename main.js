// Variables
const searchForm = document.querySelector(".search-form")
const searchBtn = document.querySelector("#search-btn")
const cartBtn = document.querySelector('#cart-btn')
const shoppingCart = document.querySelector('.shopping-cart')
const loginForm = document.querySelector('.login-form')
const loginBtn = document.querySelector('#login-btn')
const menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')

//Event Listeners
searchBtn.addEventListener('click',()=>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    
})

cartBtn.addEventListener('click',()=>{
    shoppingCart.classList.toggle('active')
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
    searchForm.classList.remove('active')
})

loginBtn.addEventListener('click',()=>{
    loginForm.classList.toggle('active')
    navbar.classList.remove('active')
    shoppingCart.classList.remove('active')
    searchForm.classList.remove('active')
})

menuBtn.addEventListener('click',()=>{
    navbar.classList.toggle('active')
    loginForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    searchForm.classList.remove('active')
})

window.onscroll = () => {
    navbar.classList.remove('active')
    loginForm.classList.remove('active')
    shoppingCart.classList.remove('active')
    searchForm.classList.remove('active')
}

//swiper js
var swiper = new Swiper(".products-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
