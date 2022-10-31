import React from "react";
import CardSlider from "../CardSlider/CardSlider";
import "./project.css";

const Project = () => {
  return (
    <div id="Project_Section">
      <section className="Project_Main_Container">
        <div className="Project_Content_Container">
          <div className="Project_Text_Container">
            <div>
              <div className="Pro_Text">Projects</div>
              <div className="Pro_Text_Provider">
                We Provide Architectural design and Construction
              </div>
            </div>
            <div className="Pro_Text_Description">
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different.
            </div>
          </div>
          <CardSlider />
        </div>
      </section>
    </div>
  );
};

export default Project;
