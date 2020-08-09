import React from "react";
import "./App.scss";
//components
import Nav from "./components/Nav/Nav";
import Banner from "./components/BannerIamge/BannerImage";
import Video from "./components/Video/Video";
import FixedButton from "./components/FixedButton/FiexdButton";
import Footer from "./components/Footer/Footer";
// img
import ImageBannerCity from "./assets/images/city.jpg";
import ImageBannerGreenHose from "./assets/images/greenhose.png";
import ImageBannerDailyFarm from "./assets/images/milk.jpg";

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
      <Banner
        img={ImageBannerGreenHose}
        before="FARM"
        mid="BY LAPTOP"
        after="MANAGEMENT"
      />
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
