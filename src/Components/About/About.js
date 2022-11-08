import React, { useEffect, useState } from "react";
import "./about.css";
import AboutButtonArrow from "../../Assets/AboutButtonArrow";

const About = () => {
  let [activeOne, setActiveOne] = useState(true);
  let [activeTwo, setActiveTwo] = useState(false);
  let [activeThree, setActiveThree] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      ActiveFunction();
    }, 3000);
  }, [activeOne, activeTwo, activeThree]);

  const ActiveFunction = () => {
    if (activeOne == true) {
      // debugger;
      setActiveOne((activeOne = false));
      setActiveTwo((activeTwo = true));
      setActiveThree((activeThree = false));
    } else if (activeTwo == true) {
      // debugger;
      setActiveOne((activeOne = false));
      setActiveTwo((activeTwo = false));
      setActiveThree((activeThree = true));
    } else if (activeThree == true) {
      // debugger;
      setActiveOne((activeOne = true));
      setActiveTwo((activeTwo = false));
      setActiveThree((activeThree = false));
    }
  };

  // console.log("activeOne", activeOne);
  // console.log("activeTwo", activeTwo);
  // console.log("activeThree", activeThree);
  // console.log("Next");

  // setInterval(ActiveFunction, 5000);

  return (
    <div id="About_Section">
      <section className="About_background">
        <div className="About_Content_Container">
          <div className="Inner_Container_First">
            <div className="About_Text">About Us</div>
            <p className="About_Paragraph_Text">
              Dream Home is a gated community with a great location. Located
              downtown, you’re within walking distance of Parks, and the best
              shopping, dining and entertainment Getting around is a breeze,
              with easy access to freeways, buses and trolleys. . Laundry is
              available on premises.Dream Home is a gated community with a great
              location. Located downtown, you’re within walking distance of
              Parks, and the best shopping, dining and entertainment Getting
              around is a breeze, with easy access to freeways, buses and
              trolleys. . Laundry is available on premises.
            </p>
            <div className="About_Btn_Container">
              <button class="ABout_Discover">Contact Us</button>
              <div className="About_Arrow_Container">
                <div className="About_See_Text">See More</div>
                <div className="About_Icon_Wrapper">
                  <AboutButtonArrow />
                </div>
              </div>
            </div>
          </div>
          <div className="Inner_Container_Second">
            <div
              className={
                activeOne === true
                  ? "About_Loaction_Count_Container_1_Active"
                  : "About_Loaction_Count_Container_1"
              }
            >
              <div className="About_Count_Text">500+</div>
              <div className="About_Project_Text">Projects</div>
              <div className="About_Paragraph_Text_Inner">
                Over 500 lexury villas for“Home Away From Home” experience
              </div>
            </div>
            <div
              className={
                activeTwo === true
                  ? "About_Loaction_Count_Container_1_Active"
                  : "About_Loaction_Count_Container_2"
              }
            >
              <div className="About_Count_Text_1">40+</div>
              <div className="About_Project_Text_1">Locations</div>
              <div className="About_Paragraph_Text_Inner_1">
                luxury villas and private holiday homes, from all across
              </div>
            </div>
            <div
              className={
                activeThree === true
                  ? "About_Loaction_Count_Container_1_Active"
                  : "About_Loaction_Count_Container_3"
              }
            >
              <div className="About_Date_Text">47/7</div>
              <div className="About_Help_Text">Help</div>
              <div className="About_Paragraph_Text_Inner_Schedule">
                24/7 Help service for all customers to guide and support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
