import React from "react";
import "./App.css";

import Nav from "./components/Nav/Nav";
import Banner from "./components/BannerIamge/BannerImage";
import Video from "./components/Video/Video";

import ImageBannerCity from "./assets/images/city.jpg";
import ImageBannerGreenHose from "./assets/images/greenhose.png";
import ImageBannerDailyFarm from "./assets/images/milk.jpg";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
