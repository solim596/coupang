$(function () {
  // business idea 애니메이션(섹션1)
  var swiper = new Swiper(".ch-wrap", {
    direction: "vertical",
    effect: "flip",
    flipEffect: {
      slideShadows: false,
    },
    centeredSlides: true,
    autoplay: {
      delay: 800,
      loop: true,
    },
    allowTouchMove: false,
  });



  // let currentIndex = 0;
  // const images = document.querySelectorAll('.ch-ani');

  // function showNextImage() {
  //   images[currentIndex].classList.add('hidden'); // 현재 이미지 숨김
  //   currentIndex = (currentIndex + 1) % images.length; // 인덱스 업데이트
  //   images[currentIndex].classList.remove('hidden'); // 다음 이미지 보이기
  // }

  // // 처음 이미지는 보이도록 설정
  // images.forEach((img, index) => {
  //   if (index !== currentIndex) {
  //     img.classList.add('hidden');
  //   }
  // });

  // // 1.5초마다 showNextImage 호출
  // setInterval(showNextImage, 1500);

  // bottom헤더 스크롤 애니
  let lastScrollTop = 0;
  const bottomHeader = document.querySelector('.bottom-header');

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop === 0) {
      // 스크롤이 최상단일 때만 헤더 보이기
      bottomHeader.classList.remove('hidden');
    } else if (scrollTop > lastScrollTop) {
      // 스크롤이 아래로 내려갈 때
      bottomHeader.classList.add('hidden');
    }

    lastScrollTop = scrollTop;
  });



  // down버튼 클릭 화면이동
  $(".down_arrow").click(function () {
    $('html, body').animate({ scrollTop: 800 });
  });


  let downArrowloc = 0;
  const downArrow = document.querySelector('.down_arrow');

  window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;

    if (scrollTop === 0) {
      // 스크롤이 최상단일 때만 헤더 보이기
      downArrow.style.display = "block";
    } else if (scrollTop > downArrowloc) {
      // 스크롤이 아래로 내려갈 때
      downArrow.style.display = "none";
    }

    downArrowloc = scrollTop;
  });

  //.s5  탭메뉴
  $(".tab-img ul li").click(function(e){
    e.preventDefault();
    let idx = $(this).index();
    $(".tab-img ul li").removeClass("active");
    $(this).addClass("active");
    $(".bottom-txt-area ul li").hide();
    $(".bottom-txt-area ul li").eq(idx).fadeIn();
  });

  // 아코디언 메뉴
  $(document).ready(function () {
    $(".intro-s7 > .history-wrap > .accordion-menu > ul > li").click(function (e) {
      e.preventDefault();
      $(this).find(".sub").slideToggle();
    });
  });
  


});