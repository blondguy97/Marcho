'use strict'

$(function () {


  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn_active');
    $(this).addClass('shop-content__btn_active')
  })

  $('.button-list').on('click', function () {
    $('.product-item').addClass('product-item_list')
  })
  $('.button-grid').on('click', function () {
    $('.product-item').removeClass('product-item_list')
  })

  $('.production-tabs__item').on('click', function (e) {
    e.preventDefault()
    $('.production-tabs__item').removeClass('production-tabs__item_active')
    $(this).addClass('production-tabs__item_active')

    $('.production-tabs__content').removeClass('production-tabs__content_active')
    $($(this).attr('href')).addClass('production-tabs__content_active')

  })


  $('.select-style').styler()

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from)
      $('.filter-price__to').text(data.to)
    },
  });


  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true
  })
})

$('.production-slider__thumbs').slick({
  asNavFor: '.production-slider__bigs',
  focusOnSelect: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  vertical: true,
})

$('.production-slider__bigs').slick({
  asNavFor: '.production-slider__thumbs',
  draggable: false,
  arrows: false,
  fade: true

})

$(".star").rateYo({
  rating: 3.6,
  starWidth: "17px",
  normalFill: "#ccccce",
  ratedFill: '#ffc35b',
  readOnly: true
});


function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(id, endtime) {
  const clock = document.getElementById(id);
  const daysSpan = clock.querySelector('.promo-countdown__days');
  const hoursSpan = clock.querySelector('.promo-countdown__hours');
  const minutesSpan = clock.querySelector('.promo-countdown__minutes');
  const secondsSpan = clock.querySelector('.promo-countdown__seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock('promo-countdown', deadline);