import React from "react";
import "./footer.css";
import Location from "../../Assets/FooterLocation";
import Facebook from "../../Assets/Facebook";
import Twitter from "../../Assets/Twitter";
import Vimeo from "../../Assets/Vimeo";
import Youtube from "../../Assets/Youtube";

const Footer = () => {
  const FooterComponet = (props) => {
    return (
      <div className="Footer_Loaction_Content_Conatiner">
        <div className="Icons_Wrapper">{props.Icons}</div>
        <div className="Footer_Text_Wrapper">
          <div className="Footer_Place_Name_Text">{props.Label}</div>
          <p className="Footer_Place_Address_Text">{props.Address}</p>
        </div>
      </div>
    );
  };
  const InputBox = ({ placeholder, type }) => {
    return (
      <div className="input_container_Footer">
        <input
          type={type}
          placeholder={placeholder}
          className="input_Email_Footer"
        />
        <button className="Footer_Sub_Button">Subcribe Now</button>
      </div>
    );
  };

  function scrolldiv(scroll) {
    var elem = document.getElementById(scroll);
    elem.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="Footer_Bg_Container">
        <div className="Footer_Content_Main_Container">
          <FooterComponet
            Icons={<Location />}
            Label={"Multan Office"}
            Address={
              "Office No. 2, 3, 4, Mezzanine Floor, Chenone Tower, Abdal Road, Multan"
            }
          />
          <FooterComponet
            Icons={<Location />}
            Label={"Karachi Office"}
            Address={
              "Mezzanine Floor, Topra Plaza, Main University Road, Opp. Urdu Science College Gulshan-e-Iqbal, Karachi."
            }
          />
          <FooterComponet
            Icons={<Location />}
            Label={"Hyderabad Office"}
            Address={
              "Garrison Complex, First Floor, Main Saddar Road, Near Bombay Bakery, Hyderabad, Sindh, Pakistan"
            }
          />
          <FooterComponet
            Icons={<Location />}
            Label={"Islamabad Office"}
            Address={"Roshan Center, Jinnah Avenue Islamabad, Punjab"}
          />
          <FooterComponet
            Icons={<Location />}
            Label={"Faisalabad Office"}
            Address={
              "Plot 330, D Ground Block B People's Colony No 1, Faisalabad, Punjab"
            }
          />
          <FooterComponet
            Icons={<Location />}
            Label={"Lahore Office"}
            Address={
              "Office No. 106, 1st Floor, Siddiq Trade Center, 72, Main Boulevard Lahore, Punjab"
            }
          />
          <FooterComponet
            Icons={<Location />}
            Label={"Nowshera Office"}
            Address={
              "Office No. 1, 1st Floor, Amin Tower, Shobra Chowk, Akramabad, Nowshera, Khyber Pakhtunkhwa"
            }
          />
          <FooterComponet
            Icons={<Location />}
            Label={"Peshawar Office"}
            Address={
              "Deans Trade Center, UG-7 & UG-8, Opposite F.C Headquarters, Saddar Peshawar, Khyber Pakhtunkhwa"
            }
          />
        </div>
        <div className="Footer_Wrapper_Content">
          <div className="Contact_Footer_Social_Main_Container">
            <div className="Contact_Sub_Text">Subscribe Newsletter</div>
            <div className="Contact_Sub_Button_Main_Container">
              <InputBox type={"email"} placeholder={"Email"} />
            </div>
          </div>
          <div className="Contact_Footer_Social_Icons_Container">
            <div className="Footer_Links_Conatiner">
              <div
                className="Footer_Link_Text"
                onClick={() => {
                  scrolldiv("About_Section");
                }}
              >
                About us
              </div>
              <div
                className="Footer_Link_Text"
                onClick={() => {
                  scrolldiv("Project_Section");
                }}
              >
                Project
              </div>
              <div
                className="Footer_Link_Text"
                onClick={() => {
                  scrolldiv("Product_Section");
                }}
              >
                Product
              </div>
              <div
                className="Footer_Link_Text"
                onClick={() => {
                  scrolldiv("Contact_Section");
                }}
              >
                Contact
              </div>
            </div>
            <div className="Footer_Icons_Conatiner">
              <div
                className="FaceBook"
                onClick={() => {
                  scrolldiv("Header_Section");
                }}
              >
                {<Facebook />}
              </div>
              <div
                className="Twitter"
                onClick={() => {
                  scrolldiv("Header_Section");
                }}
              >
                {<Twitter />}
              </div>
              <div
                className="Vimeo"
                onClick={() => {
                  scrolldiv("Header_Section");
                }}
              >
                {<Vimeo />}
              </div>
              <div
                className="Youtube"
                onClick={() => {
                  scrolldiv("Header_Section");
                }}
              >
                {<Youtube />}
              </div>
            </div>
          </div>
          <div className="Footer_Divider"></div>
          <div className="Footer_Terms_Condition_Container">
            <div className="Footer_Righs_Reserved_Text">
              © 2019 Lift Media. All rights reserved.
            </div>
            <div className="Footer_Terms_Wrapper">
              <div
                className="Footer_Text"
                onClick={() => {
                  scrolldiv("Header_Section");
                }}
              >
                Terms & Conditions
              </div>
              <div
                className="Footer_Text"
                onClick={() => {
                  scrolldiv("Header_Section");
                }}
              >
                Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
