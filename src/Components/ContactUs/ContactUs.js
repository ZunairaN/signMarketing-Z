import React from "react";
import SwiperSlider from "../Swiper/SwiperSlider";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <div id="Contact_Section">
      <section className="Contact_background">
        <div className="Contact_Swiper_Container">
          <SwiperSlider />
          <div className="Contact_Image_Container">
            <div className="Contact_Image_Text_Container"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
