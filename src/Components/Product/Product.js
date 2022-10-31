import React from "react";
import "./product.css";
import Icons from "../../Assets/ExpIcon";
import ButtonArrow from "../../Assets/ButtonArrow";

const ExpData = () => {
  return (
    <>
      <div className="Exp_Container">
        <div className="Exp_Icon_Wrapper">
          <Icons />
        </div>
        <div className="Product_Exp_Text_Container">
          <div className="Product_Exp_Text">Experienced</div>
          <p className="Pro_Pagragraph">
            ​More than 100 building and housing projects that we have built. The
            building owner chose us over other contractors in Jakarta, because
            our work is different.
          </p>
        </div>
      </div>
    </>
  );
};

const Product = () => {
  return (
    <div id="Product_Section">
      <section className="Product_background">
        <div className="Main_Content_Conatiner">
          <div className="product_Text_Container">
            <div className="Benefit_Text">Benefit</div>
            <div className="Design_Text">We Provide Architectural design</div>
            <p className="Product_Paragraph">
              ​More than 100 building and housing projects that we have built.
              The building owner chose us over other contractors in Jakarta,
              because our work is different.
            </p>
          </div>
          <div className="Product_Experience_Container">
            <ExpData />
            <ExpData />
            <ExpData />
            <ExpData />
          </div>
          <div className="Product_Btn_Main_Container">
            <div className="Product_Btn_Container">
              <button class="Product_Discover">Contact Us</button>
              <div className="Product_Arrow_Container">
                <div className="Product_See_Text">See More</div>
                <div className="Icons_Wrapper">
                  <ButtonArrow />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
