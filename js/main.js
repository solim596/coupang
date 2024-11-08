$(function () {
  $(".mainAnimation").addClass("active");

  $(document).scroll(function () {
    let scrollTop = $(window).scrollTop();
    // pc버전 header 애니메이션
    if ($(window).width() >= 1024) {
      // header애니메이션
      if (scrollTop > 0) {
        $("header").addClass("active");
      } else {
        $("header").removeClass("active");
      }
    }
    // section의 자식객체 애니메이션
    $("section").each(function () {
      // section의 시작 위치 -250값을 contentTop변수에 저장
      let contentTop = $(this).offset().top - 250;
      let backTop = $(this).offset().top;
      let contentBottom = contentTop + $(this).height();
      // 만약 section의 시작위치가 widdow의 시작위치보다 작으면
      if (contentTop < scrollTop && contentBottom > scrollTop) {
        // section의 자식 컨텐츠에 active클래스 추가
        $(this).find(".back").addClass("active");
        $(this).find(".contentAnimation").addClass("active");
        $(this).find(".textAnimation").addClass("active");
        $(this).find(".slideAnimation").addClass("active");
      }
      // 만약 section의 시작위치가 window의 시작위치 * 1.5 보다 크면
      if (contentTop > scrollTop * 1.5) {
        // section의 자식 컨텐츠에서 active클래스 제거
        $(this).find(".back").removeClass("active");
        $(this).find(".contentAnimation").removeClass("active");
        $(this).find(".textAnimation").removeClass("active");
        $(this).find(".slideAnimation").removeClass("active");
      }
      // .back 애니메이션
      if (scrollTop + $(window).height() > backTop && scrollTop < backTop + $(this).height()) {
        $(this).find(".back").addClass("active");
      } else {
        $(this).find(".back").removeClass("active");
      }
    });
    // 만약 scrollTop값이 window의 높아보다 크면 top버튼에 active추가
    if (scrollTop > $(window).height()) {
      $(".top").addClass("active");
      // scrollTop값이 window의 높이보다 크지 않으면 top버튼에 active제거
    } else {
      $(".top").removeClass("active");
    }
  });

  // 주메뉴(내비게이션)
  let docWidth = $(window).width();
  if (docWidth >= 1024) {
    // pc버전 메뉴
    $("nav").hover(function () {
      $(".sub").stop().slideDown(100);
      $(".sub-bg").stop().slideDown(100);
    }, function () {
      $(".sub").stop().slideUp(100);
      $(".sub-bg").stop().slideUp(100);
    });
  } else {
    // 모바일 버전 메뉴
    $(".mobile-menu-btn").click(function () {
      $("nav").animate({ right: 0 });
      $(".mobile-close-bg").addClass("active");
      $("#body").addClass("active");
    });
    $(".close-btn").click(function () {
      $("nav").animate({ right: "-100%" });
      $(".mobile-close-bg").removeClass("active");
      $("#body").removeClass("active");
    });
    $("nav > ul > li > a").click(function () {
      $(this).next().slideToggle();
    });
  }
  $(document).ready(function () {
    if ($(window).width() <= 480) {
      $("nav > ul > li > a").on('click', function (e) {
        e.preventDefault();
      });
    }
  });

  // 메인 슬라이드
  let mainSlider = new Swiper('.mainSwiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 300,
    observer: true,       // 슬라이드가 변경되면 하위요소를 수정 
    observeParents: true, // 부모 요소의 변화에 따라 업데이트
    autoplay: {
      delay: 2500,
      disableOnInteraction: false, // false-스와이프 후 자동 재생
    },
    navigation: {
      nextEl: '.swiper-btns .swiper-button-next',
      prevEl: '.swiper-btns .swiper-button-prev',
    },
    pagination: {
      // 호출(pager) 여부
      el: '.swiper-btns .swiper-pagination', //버튼을 담을 태그 설정
      clickable: true, // 버튼 클릭 여부
      type: 'progressbar',
    },
    on: {
      slideChange: function () {
        $('.swiper-counter .current').text(this.realIndex + 1);
      },
    },
  });

  //play-pause버튼 클릭하면 자동 멈춤, 다시 클릭하면 자동 실행
  let swiper_sw = 0;
  $(".play-pause").click(function () {
    if (swiper_sw == 0) {
      swiper_sw = 1;
      mainSlider.autoplay.stop();
      $(".play-btn").show();
      $(".pause-btn").hide();
    } else {
      swiper_sw = 0;
      mainSlider.autoplay.start();
      $(".play-btn").hide();
      $(".pause-btn").show();
    }
  });
  // 슬라이드에 마우스 올리면 자동재생 멈춤, 마우스 내리면 자동재생 시작
  $('.mainSwiper').hover(
    function () {
      mainSlider.autoplay.stop();
      $(".swiper-btns .play-btn").show();
      $(".swiper-btns .pause-btn").hide();
    },
    function () {
      mainSlider.autoplay.start();
      $(".swiper-btns .play-btn").hide();
      $(".swiper-btns .pause-btn").show();
    },
  );
  let tabSwiper1 = new Swiper(".tabSwiper1", {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".tabSwiper1 .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      }
    }
  });
  let tabSwiper2 = new Swiper(".tabSwiper2", {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".tabSwiper2 .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      }
    }
  });
  let tabSwiper3 = new Swiper(".tabSwiper3", {
    loop: true,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 20,
    centeredSlides: false,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".tabSwiper3 .swiper-pagination",
      clickable: true
    },
    breakpoints: {
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      },
      360: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,
      }
    }
  });
  // 탭메뉴
  $(".tab-title ul li").click(function (e) {
    e.preventDefault();
    let idx = $(this).index();
    $(".tab-title ul li").removeClass("active");
    $(this).addClass("active");
    $(".tab-content > div").hide();
    $(".tab-content > div").eq(idx).show();
  });

  let eventSwiper = new Swiper(".eventSwiper", {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    centeredSlides: true,
    breakpoints: {
      1200: {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true
      },
      480: {
        loop: false,
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerGroup: 1,
      },
      360: {
        slidesPerView: 1.5,
        spaceBetween: 10,
        centeredSlides: true,
        slidesPerGroup: 1,
      }
    }
  });
  let contentSwiper = new Swiper(".contentSwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    centeredSlides: false,
    navigation: {
      prevEl: ".s7 .swiper-button-prev",
      nextEl: ".s7 .swiper-button-next"
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: false,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 10,
        centeredSlides: true
      },
      480: {
        slidesPerView: 1.8,
        spaceBetween: 10,
        centeredSlides: true
      },
      360: {
        slidesPerView: 1.8,
        spaceBetween: 10,
        centeredSlides: true
      }
    }
  });

  // family site
  let sw = 0;
  $(".family").click(function (e) {
    e.preventDefault();
    if (sw == 0) {
      sw = 1;
      $(".family-list").slideDown();
    } else {
      sw = 0;
      $(".family-list").slideUp();
    }
  });
  // top버튼 클릭하면 맨 위로 이동
  $(".top").click(function () {
    $('html, body').animate({ scrollTop: 0 });
  });


});