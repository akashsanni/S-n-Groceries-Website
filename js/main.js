import { products_1 } from "./products-1.js"
import { products_2 } from "./products-2.js"
import { categories } from "./categories.js"
import { features } from "./features.js"
import { persons } from "./persons.js"
import { blogs } from "./blogs.js"
// console.log(products)

// DOM Variables
const searchForm = document.querySelector(".search-form")
const searchBtn = document.querySelector("#search-btn")
const cartBtn = document.querySelector('#cart-btn')
const shoppingCart = document.querySelector('.shopping-cart')
const loginForm = document.querySelector('.login-form')
const loginBtn = document.querySelector('#login-btn')
const menuBtn = document.querySelector('#menu-btn')
const navbar = document.querySelector('.navbar')

const swiperWrapper1 = document.querySelector('.swiper-wrapper-1');
const swiperWrapper2 = document.querySelector('.swiper-wrapper-2');
const categoriesBox = document.querySelector('.categories-box');
const featureBox = document.querySelector('.feature-box');


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
    // centeredSlides: true,
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
    centeredSlides: false,
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



//window load menu

//slider-products-1
window.addEventListener("DOMContentLoaded", function () {
    let displayProducts = products_1.map(function (item) {
  
      return `
      <div class="swiper-slide box">
          <img src="${item.img}" alt="">
          <h3>${item.name}</h3>
          <div class="price">$${item.price}/-</div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="" class="btn add-to-cart">add to cart</a>
      </div>
      `;
    });
    displayProducts = displayProducts.join("");
    
  
    swiperWrapper1.innerHTML = displayProducts;
  });

  //slider-products-2
window.addEventListener("DOMContentLoaded", function () {
    let displayProducts = products_2.map(function (item) {
  
      return `
      <div class="swiper-slide box">
          <img src="${item.img}" alt="">
          <h3>${item.name}</h3>
          <div class="price">$${item.price}/-</div>
          <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
          </div>
          <a href="" class="btn add-to-cart">add to cart</a>
      </div>
      `;
    });
    displayProducts = displayProducts.join("");
    
  
    swiperWrapper2.innerHTML = displayProducts;
  });

  //categories
window.addEventListener("DOMContentLoaded", function () {
    let displayProducts = categories.map(function (category) {
  
      return `
      <div class="box">
          <img src="${category.img}" alt="" >
          <h3>${category.name}</h3>
          <p>upto ${category.discount}% off</p>
          <a href="#" class="btn">shop now</a>
      </div>
      `;
    });
    displayProducts = displayProducts.join("");
    
  
    categoriesBox.innerHTML = displayProducts;
  });

//features
window.addEventListener("DOMContentLoaded", function () {
  let displayProducts = features.map(function (feature) {

    return `
    <div class="box">
        <img src="${feature.img}" alt="image">
        <h3>${feature.name}</h3>
        <p>${feature.desc}</p>
        <a href="#" class="btn">read more</a>
    </div>
    `;
  });
  displayProducts = displayProducts.join("");
  

  featureBox.innerHTML = displayProducts;
});

//add to cart feature
// let itemAddedCart = [];

// const addToCart = document.querySelector('.add-to-cart')
// const swiperWrapper = document.querySelector('.swiper-wrapper')
// const shoppingCart = document.querySelector('.shopping-cart')

// swiperWrapper1.addEventListener('click',(e)=>{
//   e.preventDefault();
//   // console.log(e.target.classList.value === `btn add-to-cart`);
//   const result = e.target.classList.value === `btn add-to-cart`;
//   // console.log(e.target.parentElement)
//   let targetParent = e.target.parentNode;
//   if(result){
//     itemAddedCart.push(targetParent)
//     console.log(itemAddedCart)
//   }
//   // cartBox.appendChild(itemAddedCart)
// })
// swiperWrapper2.addEventListener('click',(e)=>{
//   e.preventDefault();
//   console.log(e.target.classList.value === `btn add-to-cart`);
// })

const reviewWrapper = document.querySelector('.review-wrapper');
const blogsContainer = document.querySelector('.blogs-container');

window.addEventListener("DOMContentLoaded", function () {
  let displayProducts = persons.map(function (person) {

    return `
        <div class="swiper-slide box">
            <img src="${person.img}" alt="">
            <p>${person.desc}</p>
            <h3>${person.name}</h3>
            <div class="stars">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </div>
        </div>
    `;
  });
  displayProducts = displayProducts.join("");
  

  reviewWrapper.innerHTML = displayProducts;
});

window.addEventListener("DOMContentLoaded", function () {
  let displayProducts = blogs.map(function (blog) {

    return `
    <div class="box">
        <img src="${blog.img}" alt="" >
        <div class="content">
            <div class="icons">
                <a href="#"> <i class="fas fa-user"></i> by user </a>
                <a href="#"> <i class="fas fa-calendar"></i> ${blog.date} </a>
            </div>
            <h3>${blog.feature}</h3>
            <p>${blog.desc}</p>
            <a href="#" class="btn">read more</a>
        </div>
    </div> 
    `;
  });
  displayProducts = displayProducts.join("");
  

  blogsContainer.innerHTML = displayProducts;
});