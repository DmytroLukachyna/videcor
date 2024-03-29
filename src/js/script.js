$(document).ready(function () {
  $('.tabs__wrapper').tabslet();
  $('[data-fancybox]:not(.slick-cloned)').fancybox({
    /* touch: false, */
    keyboard: false,
    arrows: false,
    autoFocus: false,
    errorTpl:
      '<div class="fancybox-error"><p>Приносим извинения, произошла ошибка. Мы уже работаем над ее исправлением!</p></div>',
    buttons: ['zoom', 'close'],
  });
  $('.tabs__content-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    prevArrow: $('.tabs__content-arrow_left'),
    nextArrow: $('.tabs__content-arrow_right'),
    accessibility: false,
    focusOnSelect: false,
    swipe: false,
    appendDots: '.tabs__content-dots',
    dotsClass: 'dot',
  });
  var total = $('.dot li');
  $('.tabs__counter').text(`1/${total.length}`);
  var $status = $('.tabs__counter');
  var $slickElement = $('.tabs__content-slider');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    if (!slick.$dots) {
      return;
    }
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + '/' + slick.$dots[0].children.length);
  });
  $('.tabs__gallery-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    swipe: false,
    prevArrow:
      '<div class="tabs__gallery-arrow tabs__gallery-arrow_left"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.910734 6.58934C0.585297 6.2639 0.585297 5.73626 0.910734 5.41083L5.91073 0.410826C6.23617 0.0853887 6.76381 0.0853887 7.08925 0.410826C7.41468 0.736263 7.41468 1.2639 7.08925 1.58934L2.6785 6.00008L7.08925 10.4108C7.41468 10.7363 7.41468 11.2639 7.08925 11.5893C6.76381 11.9148 6.23617 11.9148 5.91074 11.5893L0.910734 6.58934Z" fill="#989EA2"/></svg></div>',
    nextArrow:
      '<div class="tabs__gallery-arrow tabs__gallery-arrow_right"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.08925 5.41083C7.41468 5.73626 7.41468 6.2639 7.08925 6.58934L2.08925 11.5893C1.76381 11.9148 1.23617 11.9148 0.910734 11.5893C0.585297 11.2639 0.585297 10.7363 0.910734 10.4108L5.32148 6.00008L0.910735 1.58934C0.585298 1.2639 0.585298 0.736263 0.910735 0.410826C1.23617 0.0853888 1.76381 0.0853888 2.08925 0.410826L7.08925 5.41083Z" fill="#989EA2"/></svg></div>',
    accessibility: false,
    focusOnSelect: false,
  });
  $('.profile__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: true,
    prevArrow:
      '<div class="arrow arrow_left"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-left" class="svg-inline--fa fa-chevron-left fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg></div>',
    nextArrow:
      '<div class="arrow arrow_right"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg></div>',
    accessibility: false,
    focusOnSelect: false,
    appendDots: '.profile__dots',
    dotsClass: 'dot',
    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $('.order__photo').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    swipe: false,
    prevArrow:
      '<div class="order__photo-arrow order__photo-arrow_left"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.910734 6.58934C0.585297 6.2639 0.585297 5.73626 0.910734 5.41083L5.91073 0.410826C6.23617 0.0853887 6.76381 0.0853887 7.08925 0.410826C7.41468 0.736263 7.41468 1.2639 7.08925 1.58934L2.6785 6.00008L7.08925 10.4108C7.41468 10.7363 7.41468 11.2639 7.08925 11.5893C6.76381 11.9148 6.23617 11.9148 5.91074 11.5893L0.910734 6.58934Z" fill="#989EA2"/></svg></div>',
    nextArrow:
      '<div class="order__photo-arrow order__photo-arrow_right"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.08925 5.41083C7.41468 5.73626 7.41468 6.2639 7.08925 6.58934L2.08925 11.5893C1.76381 11.9148 1.23617 11.9148 0.910734 11.5893C0.585297 11.2639 0.585297 10.7363 0.910734 10.4108L5.32148 6.00008L0.910735 1.58934C0.585298 1.2639 0.585298 0.736263 0.910735 0.410826C1.23617 0.0853888 1.76381 0.0853888 2.08925 0.410826L7.08925 5.41083Z" fill="#989EA2"/></svg></div>',
    accessibility: false,
    focusOnSelect: false,
  });
  var modalOnTimer = setTimeout(function () {
    $.fancybox.open({
      src: '#calculate',
    });
  }, 40000);
  $('[data-src]').on('click', function () {
    clearTimeout(modalOnTimer);
  });
});
