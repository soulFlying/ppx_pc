
$(function () {
  if (document.readyState == "complete"){
    refesh();
  }
  refesh();
  function refesh() {
    var height = $('.priceMain > img').height();
    var pWidth = $('.imgCastle >div p').siblings('img').width();
    var group_p3 = $('.imgGroup3 >div >p').outerHeight() * 0.5;
    setTimeout(function () {
      var hotel_h = $('.hotelBg').height();
      var carousels_h5 = $('.carousels5 .swiper-container').height();
      var carousels_h7 = $('.carousels7 .swiper-container').height();
      $('.activityWords5').css('height',carousels_h5);
      $('.activityWords7').css('height',carousels_h7);
      $('.hotelDescribe').css('height', hotel_h);
      $('.sonevaImg').css('height', hotel_h*0.8);
    },1000);
    $('.imgGroup3 >div >p').css('margin-top', -group_p3);
    $('.imgCastle >div p').css({'width': pWidth, 'margin-left': -(pWidth / 2)});
  }
  window.onresize = function () {
   refesh();
  };
  var mySwiper1 = new Swiper('.swiper-container1', {
    direction: 'horizontal',
    loop: true,
    autoplay: 3000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    autoplayDisableOnInteraction: false,
    paginationClickable: true,
    paginationElement: 'li',
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
  });
  //轮播2
  var mySwiper2 = new Swiper('.swiper-container2', {
    direction: 'horizontal',
    loop: true,
    autoplay: 5000,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
    autoplayDisableOnInteraction : false,
    onSlideChangeStart: function(mySwiper2){
      var thisIndex = mySwiper2.activeIndex;
      if(thisIndex>4){
        thisIndex = 1;
      }
      else  if (thisIndex<=0){
        thisIndex = 4;
      }
      $('.activityWords5').find('div').stop(true,true).fadeOut(0);
      $('.activityWords5').find('div:nth-child('+thisIndex+')').stop(true,true).fadeIn(600);
    }
  });
  //轮播3
  var mySwiper3 = new Swiper('.swiper-container3', {
    direction: 'horizontal',
    loop: true,
    autoplay: 4500,
    // 如果需要分页器
    pagination: '.swiper-pagination',
    paginationClickable: true,
    observer: true,//修改swiper自己或子元素时，自动初始化swiper
    observeParents: true,
    autoplayDisableOnInteraction : false,
    onSlideChangeStart: function(mySwiper3){
      var thisIndex = mySwiper3.activeIndex;
      if(thisIndex>5){
        thisIndex = 1;
      }
      else  if (thisIndex<=0){
        thisIndex = 5;
      }
      $('.activityWords7').find('div').stop(true,true).fadeOut(0);
      $('.activityWords7').find('div:nth-child('+thisIndex+')').stop(true,true).fadeIn(600);
    }
  });

  $('.crab').on('click', function () {
    $('.wraps').stop(true,true).show();
    $('.formFrame').stop(true,true).show();
  });
  $('.formFrame #close').on('click', function () {
    $('.wraps').stop(true,true).hide();
    $('.formFrame').stop(true,true).hide();
  });
  /*if (location.href.indexOf("?xyz=")<0)
  {
    location.href=location.href+"?xyz="+Math.random();
  }*/
})
