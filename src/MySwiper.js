import React from 'react';
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation, EffectFade, Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';

const MySwiper = () => {
  SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination]);
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    slidesPerView: 1,
    loop: true,
    speed: 3000,
    watchSlidesVisibility: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    // renderPrevButton: () => (
    //   <div className='d-none d-sm-block swiper-btn slider-button-prev'>
    //     <i className='flaticon-arrow-left-th'></i>
    //   </div>
    // ),
    // renderNextButton: () => (
    //   <div className='d-none d-sm-block swiper-btn slider-button-next'>
    //     <i className='flaticon-arrow-right-th'></i>
    //   </div>
    // ),
  };

  return (
    <Swiper {...params}>
      <div>
        <img src='/images/man.png' width={400} height={200} />
      </div>
      <div>
        <img src='/images/litkovskaya.jpg' width={400} height={200} />
      </div>
      <div>
        <img src='/images/mousepad.jpg' width={400} height={200} />
      </div>
      <div>
        <img src='/images/oldboy.jpg' width={400} height={200} />
      </div>
    </Swiper>
  );
};

export default MySwiper;
