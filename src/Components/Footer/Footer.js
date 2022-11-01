import React from "react";
import "./footer.css";
import Location from "../../Assets/FooterLocation";

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
      </div>
    </>
  );
};

export default Footer;
