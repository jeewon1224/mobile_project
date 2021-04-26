$(document).ready(function() {

  $(".list").click(function() {
    $(this).next(".sub").stop().slideToggle(300);
    $(this).toggleClass('on').siblings().removeClass('on');
    $(this).next(".sub").siblings(".sub").slideUp(300); // 1개씩 펼치기
  });




 
 var swiper = new Swiper('.banner_slider', {
  centeredSlides: true,
  slidesPerView: 1.1,
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
    // loop: true,

  });
 


  var swiper = new Swiper(".myList_slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // loop: true,

  });
 
  var swiper = new Swiper(".origin_slider", {
    slidesPerView: "auto",
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // loop: true,

  });
 
 
  var swiper = new Swiper(".people_slider", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    // loop: true,

  });
 

  var swiper = new Swiper(".know_slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
      el: '.know.swiper-scrollbar',
      // hide: true,
    },
    loop: true,

  });








});
