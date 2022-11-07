import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";
import HeaderText from "../../Assets/Header_Text.png";
import GifSvg from "../../Assets/GifSvg";
import Image_1 from "../../Assets/Image_1_Gray.png";
import Image_2 from "../../Assets/Image_2_Gray.png";
import Image_3 from "../../Assets/Image_3_Gray.png";
import Image_4 from "../../Assets/Image_4_Gray.png";
import Image_5 from "../../Assets/Image_5_Gray.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const DisriProject = (props) => {
  return (
    <div className="DisriProject_Container">
      <div className="icon_Container">
        <div className="icon_Image">{props.Icon_Image}</div>
      </div>
      <div className="label_Text">{props.Label}</div>
    </div>
  );
};

const HeaderImageSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      modules={[Navigation]}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      pagination={{ clickable: true }}
      onSlideChange={(swiper) => {
        // setActiveSlide(swiper.realIndex);
      }}
      onSwiper={(swiper) => {
        console.log("swiper.activeIndex", swiper.activeIndex);
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
        swiper.navigation.init();
        swiper.navigation.update();
      }}
      className="mySwiperHeader"
    >
      <SwiperSlide>
        <div className="mySwiperHeader_Animation_Container">
          <div className="Image_1"></div>
          <div className="Image_2"></div>
          <div className="Image_3"></div>
          <div className="Image_4"></div>
          <div className="Image_5"></div>
          <div className="Image_2"></div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

const Header = () => {
  return (
    <div id="Header_Section">
      <section className="Header_background">
        <Navbar />
        <div className="Header_Image_background"></div>
        <div className="Header_Conatiner">
          <div className="Header_Text_Container">
            <div className="Imge_wrapper_Header">
              <img src={HeaderText} alt="logo" />
            </div>
            <div className="Btn_wrapper">
              <p className="paragraph">
                ​More than 100 building and housing projects that we have built.
                The building owner chose us over other contractors in Jakarta,
                because our work is different.
              </p>
              <button class="Discover">Discover more</button>
            </div>
          </div>
          <div className="Header_Pro_Bg">
            <DisriProject
              Icon_Image={<GifSvg />}
              Label={"Market my project!"}
            />
            <DisriProject
              Icon_Image={<GifSvg />}
              Label={"Market my project!"}
            />
            <div className="No_Project_Conatiner">
              <div className="text_Container">
                <div className="text_Wrapper">
                  <div className="cout_Text">500+</div>
                  <div className="header_Pro_Bg_Text">projects</div>
                </div>
                <div className="text_Wrapper">
                  <div className="cout_Text">40+</div>
                  <div className="header_Pro_Bg_Text">Locations</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="Header_bottom_container">
          <div className="Animation_Wrapper">
            <HeaderImageSlider />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
