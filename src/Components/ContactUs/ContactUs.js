import React from "react";
import SwiperSlider from "../Swiper/SwiperSlider";
import "./contactUs.css";
import Image from "../../Assets/Loc_Image1.png";
import Image2 from "../../Assets/Loc_Image2.png";
import Image3 from "../../Assets/Loc_Image3.png";
import Image4 from "../../Assets/Loc_Image4.png";
import Image5 from "../../Assets/Loc_Image5.png";
import Image6 from "../../Assets/Loc_Image6.png";
import FormImage from "../../Assets/Contact_Form_Image.png";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  const LocationComponent = (props) => {
    return (
      <div className="Contact_Map_Container">
        <div className="Map_Image_Wrapper">
          <img src={props.Image} alt="Islamabad" />
        </div>
        <div className="Contact_Loc_Text">{props.Label}</div>
      </div>
    );
  };

  const InputBox = ({ placeholder, type }) => {
    return (
      <div className="input_container">
        <input type={type} placeholder={placeholder} className="input_Email" />
      </div>
    );
  };
  return (
    <div id="Contact_Section">
      <section className="Contact_background">
        <div className="Contact_Content_Wrapper">
          <div className="Contact_Swiper_Container">
            <SwiperSlider />
            <div className="Contact_Image_Container">
              <div className="Contact_Image_Text_Container">
                <div className="Contact_Text_Container">
                  <duv className="Contact_Latest_Text">Latest</duv>
                  <p className="Contact_Paragraph">
                    We know & understand your choice
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="Region_Text_Main_Container">
            <div className="Region_Text_Container">
              <div className="Region_Text">Region</div>
              <p className="Region_Text_Paragraph">
                We Provide Architectural design and Construction
              </p>
            </div>
            <p className="Region_Paragraph">
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different.
            </p>
          </div>
          <div className="Contact_Map_Main_Container">
            <LocationComponent Image={Image} Label={"Islamabad"} />
            <LocationComponent Image={Image2} Label={"South Punjab"} />
            <LocationComponent Image={Image3} Label={"Sindh"} />
            <LocationComponent Image={Image4} Label={"KP"} />
            <LocationComponent Image={Image5} Label={"Central Punjab"} />
            <LocationComponent Image={Image6} Label={"Balochistan"} />
          </div>
        </div>
        <div className="Contact_Form_Divider">
          <div className="Contact_Form_Container">
            <div className="Contact_Form_Text_Container">
              <div className="Input_Header_Text">Contact Us</div>
              <div className="Diviver_Contact"></div>
              <div className="Contact_Input_Wrapper">
                <InputBox type={"name"} placeholder={"Name..."} />
                <InputBox type={"email"} placeholder={"Email"} />
                <textarea
                  placeholder="Write Your Message Here..."
                  id="Contact_Text_Area"
                  name=""
                  rows="4"
                  cols="50"
                ></textarea>
                <div className="Contact_Button_Form_Wrapper">
                  <div className="Contact_Send_Button">Send</div>
                </div>
              </div>
            </div>
            <div className="Contact_Form_Image_Container">
              <img src={FormImage} alt="FormImage" />
            </div>
          </div>
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
