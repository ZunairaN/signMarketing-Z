import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./swiperSlider.css";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import LeftArrow from "../../Assets/ArrowLeft";
import RightArrow from "../../Assets/ArrowRight";
import Location from "../../Assets/Location";
import WhatsApp from "../../Assets/WhatsApp";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import ArrowUp from "../../Assets/ArrowUp";
import ArrowDown from "../../Assets/ArrowDown";
import TimeIcon from "../../Assets/TimeIcon";
import UserIcon from "../../Assets/UserIcon";

const SwiperSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const Data = [
    {
      id: 1,
      name: "Dayyan Shahid",
      Date: "Sep 24,2022",
      Contact: "Contact",
      UserIcon: <UserIcon />,
      TimeIcon: <TimeIcon />,
      image: require("../../Assets/Card_Image1.png"),
    },
    {
      id: 2,
      name: "Dayyan Shahid",
      Date: "Sep 24,2022",
      Contact: "Contact",
      UserIcon: <UserIcon />,
      TimeIcon: <TimeIcon />,
      image: require("../../Assets/Card_Image2.jpg"),
    },
    {
      id: 3,
      name: "Dayyan Shahid",
      Date: "Sep 24,2022",
      Contact: "Contact",
      UserIcon: <UserIcon />,
      TimeIcon: <TimeIcon />,
      image: require("../../Assets/Card_Image1.png"),
    },
    {
      id: 4,
      name: "Dayyan Shahid",
      Date: "Sep 24,2022",
      Contact: "Contact",
      UserIcon: <UserIcon />,
      TimeIcon: <TimeIcon />,
      image: require("../../Assets/Card_Image4.jpg"),
    },
    {
      id: 5,
      name: "Dayyan Shahid",
      Date: "Sep 24,2022",
      Contact: "Contact",
      UserIcon: <UserIcon />,
      TimeIcon: <TimeIcon />,
      image: require("../../Assets/Card_Image3.jpg"),
    },
  ];
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <div className="Swiper_Main_Container">
      <div className="Swiper_Pagination_Wrapper">
        <div className="Swiper_Bullet_Container">
          <span
            className={
              activeSlide === 0
                ? "swiper_pagination_bullet_ContactUs swiper_pagination_bullet_Active_ContactUs"
                : "swiper_pagination_bullet_ContactUs"
            }
          ></span>
          <span
            className={
              activeSlide === 1
                ? "swiper_pagination_bullet_ContactUs swiper_pagination_bullet_Active_ContactUs"
                : "swiper_pagination_bullet_ContactUs"
            }
          ></span>
          <span
            className={
              activeSlide === 2
                ? "swiper_pagination_bullet_ContactUs swiper_pagination_bullet_Active_ContactUs"
                : "swiper_pagination_bullet_ContactUs"
            }
          ></span>
          <span
            className={
              activeSlide === 3
                ? "swiper_pagination_bullet_ContactUs swiper_pagination_bullet_Active_ContactUs"
                : "swiper_pagination_bullet_ContactUs"
            }
          ></span>
          <span
            className={
              activeSlide === 4
                ? "swiper_pagination_bullet_ContactUs swiper_pagination_bullet_Active_ContactUs"
                : "swiper_pagination_bullet_ContactUs"
            }
          ></span>
        </div>
        <div className="Arrow_Container">
          <span ref={navigationPrevRef} className="Arrow_Up_Style">
            <ArrowUp />
          </span>
          <span ref={navigationNextRef} className="Arrow_Down_Style">
            <ArrowDown />
          </span>
        </div>
      </div>
      <Swiper
        className="mySwiper"
        direction={"vertical"}
        modules={[Navigation]}
        spaceBetween={15}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onSlideChange={(swiper) => {
          console.log("slide Change");
          setActiveSlide(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {Data.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="Swiper_Wrapper">
              <div
                style={{
                  backgroundImage: `url(${user.image})`,
                }}
                className="Swiper_Image_Bg"
              >
                <div className="Swiper_Image_Content_Container">
                  <p className="Swiper_Contact_Text">
                    The Right Solution to Build a Sturdy Type 45 House
                  </p>
                  <div className="Swiper_UserIcon_Wrapper">
                    <div>{user.UserIcon}</div>
                    <div className="Swiper_User_Name">{user.name}</div>
                  </div>
                  <div className="Swiper_DateIcen_Wrapper">
                    <div>{user.TimeIcon}</div>
                    <div className="Swiper_User_Name">{user.Date}</div>
                  </div>
                  <div className="Swiper_Contect_Button">{user.Contact}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SwiperSlider;
