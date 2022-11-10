import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./header.css";
import HeaderText from "../../Assets/Header_Text.png";
import GifSvg from "../../Assets/GifSvg";

import "swiper/css";
import "swiper/css/pagination";

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
  return (
    <div class="marquee">
      <div class="marquee--inner">
        <span>
          <div className="Image_1"></div>
          <div className="Image_2"></div>
          <div className="Image_3"></div>
          <div className="Image_4"></div>
          <div className="Image_5"></div>
          <div className="Image_1"></div>
          <div className="Image_2"></div>
          <div className="Image_3"></div>
        </span>
        <span style={{ paddingLeft: "55px" }}>
          <div className="Image_1"></div>
          <div className="Image_2"></div>
          <div className="Image_3"></div>
          <div className="Image_4"></div>
          <div className="Image_5"></div>
          <div className="Image_1"></div>
          <div className="Image_2"></div>
          <div className="Image_3"></div>
        </span>
      </div>
    </div>
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
                Sign Marketing is Pakistan’s leading and reputable sales and
                marketing company. We will build and market your project with
                the best and most innovative market practices to get you the
                best returns on your big investment.
              </p>
              <button class="Discover">Discover more</button>
            </div>
          </div>
          <div className="Header_Pro_Bg">
            <DisriProject Icon_Image={<GifSvg />} Label={"BUY"} />
            <DisriProject Icon_Image={<GifSvg />} Label={"SELL"} />
            <DisriProject Icon_Image={<GifSvg />} Label={"INVEST"} />
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
          <HeaderImageSlider />
        </div>
      </section>
    </div>
  );
};

export default Header;
