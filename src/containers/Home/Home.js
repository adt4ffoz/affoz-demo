import React from "react";
import "./Home.scss";
//components
import Banner from "../../components/Home/BannerIamge/BannerImage";
import Video from "../../components/Home/Video/Video";
import FixedButton from "../../components/Home/FixedButton/FiexdButton";
import GeneralTitle from "../../components/Home/GeneralTitle/GeneralTitle";
import Feedback from "../../components/Home/Feedback/Feedback";
import Partner from "../../components/Home/Partner/Partner";

// img
import ImageBannerCity from "../../assets/images/homer.jpg";
import ImageBannerGreenHose from "../../assets/images/banner.jpg";
import ImageBannerDailyFarm from "../../assets/images/feedback.jpg";
import ImageBannerNews1 from "../../assets/images/bannernews1.jpg";
import ImageBannerNews2 from "../../assets/images/bannernews2.jpg";
import User1 from "../../assets/images/user1.jpg";
import User2 from "../../assets/images/user2.jpg";
import User3 from "../../assets/images/user3.jpg";
import User4 from "../../assets/images/user4.jpg";
import User5 from "../../assets/images/user5.jpg";

// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

// install Swiper components
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);

export default function Home() {
  return (
    <div className="home">
      <FixedButton />
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
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 5000 }}
      >
        <SwiperSlide>
          <Banner
            img={ImageBannerGreenHose}
            before="FARM"
            mid="BY LAPTOP"
            after="MANAGEMENT"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            img={ImageBannerNews1}
            before="FARM"
            mid="BY LAPTOP"
            after="MANAGEMENT"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Banner
            img={ImageBannerNews2}
            before="FARM"
            mid="BY LAPTOP"
            after="MANAGEMENT"
          />
        </SwiperSlide>
      </Swiper>
      <Video />
      <Banner
        img={ImageBannerDailyFarm}
        before="TH TRUE MILK"
        mid="FEDDACK"
        after=""
      />
      <GeneralTitle title="FEEDBACK" />
      <Swiper
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 5000 }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <Feedback url={User1} />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback url={User2} />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback url={User3} />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback url={User4} />
        </SwiperSlide>
        <SwiperSlide>
          <Feedback url={User5} />
        </SwiperSlide>
      </Swiper>
      <GeneralTitle title="PARTNER" />
      <Partner />
    </div>
  );
}
