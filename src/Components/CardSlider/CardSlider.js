import React, { useState, useEffect } from "react";
import "./cardSlider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/swiper-bundle.min.css";
import LeftArrow from "../../Assets/ArrowLeft";
import RightArrow from "../../Assets/ArrowRight";
import Location from "../../Assets/Location";
import WhatsApp from "../../Assets/WhatsApp";

const CardSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidePerView, setSlidePerView] = useState(4);

  useEffect(() => {
    if (window.innerWidth < 600 || window.innerWidth == 600) setSlidePerView(1);
    else if (window.innerWidth < 900 || window.innerWidth == 900)
      setSlidePerView(2);
    else if (window.innerWidth < 1280 || window.innerWidth == 1280)
      setSlidePerView(3);
    else setSlidePerView(4);

    window.addEventListener("resize", () => {
      if (window.innerWidth < 600 || window.innerWidth == 600)
        setSlidePerView(1);
      else if (window.innerWidth < 900 || window.innerWidth == 900)
        setSlidePerView(2);
      else if (window.innerWidth < 1280 || window.innerWidth == 1280)
        setSlidePerView(3);
      else setSlidePerView(4);
    });
    return () => window.removeEventListener("resize", null);
  }, []);

  const Data = [
    {
      id: 1,
      name: "Signature Hotels",
      Location: "Top-City, Islamabad",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image1.png"),
    },
    {
      id: 2,
      name: "J7 Emporium",
      Location: "B-17, Islamabad",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image2.jpg"),
    },
    {
      id: 3,
      name: "J7 Icon",
      Location: "Mumtaz City, Islamabad",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image3.jpg"),
    },
    {
      id: 4,
      name: "J7 Mall Chakwal",
      Location: "Talagang Road, Chakwal",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image4.jpg"),
    },
    {
      id: 5,
      name: "Signature Hotels",
      Location: "Top-City, Islamabad",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image1.png"),
    },
    {
      id: 6,
      name: "J7 Emporium",
      Location: "B-17, Islamabad",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image2.jpg"),
    },
    {
      id: 7,
      name: "J7 Icon",
      Location: "Mumtaz City, Islamabad",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image3.jpg"),
    },
    {
      id: 8,
      name: "J7 Mall Chakwal",
      Location: "Talagang Road, Chakwal",
      Contact: "Contact",
      LocIcon: <Location />,
      WhatsAppIcon: <WhatsApp />,
      image: require("../../Assets/Card_Image4.jpg"),
    },
  ];

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  return (
    <div style={{ flex: "1", marginTop: "50px" }}>
      <Swiper
        direction="horizontal"
        modules={[Navigation]}
        spaceBetween={15}
        slidesPerView={slidePerView}
        loop={true}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setActiveSlide(swiper.realIndex);
        }}
        onSwiper={(swiper) => {
          console.log("swiper.activeIndex", swiper.activeIndex);
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {Data.map((user) => (
          <SwiperSlide key={user.id}>
            <div className="Card_Wrapper">
              <div
                style={{
                  backgroundImage: `url(${user.image})`,
                }}
                className="Card_Image_Bg"
              >
                <div className="Card_Content_Container">
                  <div className="Card_User_Name">{user.name}</div>
                  <div className="Card_User_Location">{user.Location}</div>
                  <div className="Iocn_Content_Conatiner">
                    <div className="Card_Contect_Button">{user.Contact}</div>
                    <div className="Icon_Conatiner">
                      <div className="Card_User_Location_Iocn">
                        {user.LocIcon}
                      </div>
                      {user.WhatsAppIcon}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper_pagination_wrapper">
          <span
            className={
              activeSlide === 0
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>
          <span
            className={
              activeSlide === 1
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>
          <span
            className={
              activeSlide === 2
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>
          <span
            className={
              activeSlide === 3
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>
          <span
            className={
              activeSlide === 4
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>
          <span
            className={
              activeSlide === 5
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>
          <span
            className={
              activeSlide === 6
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>
          <span
            className={
              activeSlide === 7
                ? "swiper_pagination_bullet swiper_pagination_bullet_Active"
                : "swiper_pagination_bullet"
            }
          ></span>

          <div className="swiper_button_wrapper">
            <span ref={navigationPrevRef} className="Pre_button">
              <LeftArrow />
            </span>
            <div ref={navigationNextRef} className="Next_button">
              <RightArrow />
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default CardSlider;
