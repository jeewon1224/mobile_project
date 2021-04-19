$(document).ready(function() {

 // var mySwiper = new Swiper(".banner_slider", {
 //   spaceBetween: 150,
 //   slidesPerView: 'auto',
 //   centeredSlides: true,
 //   roundLengths: true,
 //   loop: true,
 //   navigation: {
 //     nextEl: ".swiper-button-next",
 //     prevEl: ".swiper-button-prev"
 //   }
 // });






 
 var swiper = new Swiper('.banner_slider', {
  centeredSlides: true,
slidesPerView: 'auto',
// lazy: {
// 	loadPrevNext: true,
//   },
  spaceBetween: 0,
  loop: true,
// autoplay: {
//   delay: 2000,
// 	disableOnInteraction: false,
// },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // navigation: {
  //   nextEl: '.main_wrap .btn.next',
  //   prevEl: '.main_wrap .btn.prev',
  // },



  
  
  
  
  
  
  
  
  
 });
 
 
 
 
 
  var swiper = new Swiper(".con_slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop: true,

  });
 


  var swiper = new Swiper(".myList_slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop: true,

  });
 
  var swiper = new Swiper(".origin_slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    loop: true,

  });
 








});
