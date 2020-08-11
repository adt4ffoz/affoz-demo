import React from "react";
import "./App.scss";
//components
import Nav from "./components/Nav/Nav";
import Banner from "./components/BannerIamge/BannerImage";
import Video from "./components/Video/Video";
import FixedButton from "./components/FixedButton/FiexdButton";
import Footer from "./components/Footer/Footer";
// img
import ImageBannerCity from "./assets/images/homer.jpg";
import ImageBannerGreenHose from "./assets/images/banner.jpg";
import ImageBannerDailyFarm from "./assets/images/feedback.jpg";
import ImageBannerNews1 from "./assets/images/bannernews1.jpg"
import ImageBannerNews2 from "./assets/images/bannernews2.jpg"
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

function App() {
  return (
    <div className="app">
      <FixedButton />
      <Nav />
      <Banner
        img={ImageBannerCity}
        before=""
        mid="BUIDING"
        after="MANAGEMENT"
      />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 3000 }}
      >
        <SwiperSlide> <Banner
          img={ImageBannerGreenHose}
          before="FARM"
          mid="BY LAPTOP"
          after="MANAGEMENT"
        /></SwiperSlide>
        <SwiperSlide> <Banner
          img={ImageBannerNews1}
          before="FARM"
          mid="BY LAPTOP"
          after="MANAGEMENT"
        /></SwiperSlide>
        <SwiperSlide> <Banner
          img={ImageBannerNews2}
          before="FARM"
          mid="BY LAPTOP"
          after="MANAGEMENT"
        /></SwiperSlide>

      </Swiper>

      <Video />
      <Banner
        img={ImageBannerDailyFarm}
        before="TH TRUE MILK"
        mid="FEDDACK"
        after=""
      />
      <Footer />
    </div>
  );
}

export default App;
