import React from "react";
import "./product.css";
import Icons from "../../Assets/ExpIcon";
import ButtonArrow from "../../Assets/ButtonArrow";

const ExpData = (props) => {
  return (
    <>
      <div className="Exp_Container">
        <div className="Exp_Icon_Wrapper">
          <Icons />
        </div>
        <div className="Product_Exp_Text_Container">
          <div className="Product_Exp_Text">{props.title}</div>
          <p className="Pro_Pagragraph">{props.description}</p>
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
            <div className="Design_Text">
              Pakistan’s Most Reputable Real Estate Marketplace
            </div>
            <p className="Product_Paragraph">
              Sign Marketing is Pakistan’s leading and reputable sales and
              marketing company. We will build and market your project with the
              best and most innovative market practices to get you the best
              returns on your big investment.
            </p>
          </div>
          <div className="Product_Experience_Container">
            <ExpData
              title="Mission"
              description="Our highly experienced professionals supervise the construction of ambitious projects and create state-of-the-art and innovative strategies to market them. We aim to develop and market a  project with strategies that will give you the highest investment returns."
            />
            <ExpData
              title="Vision"
              description="Our vision is to revolutionize the real estate market and set a standard of quality and reliability for everyone to follow. We want to bring a solution to real estate problems in Pakistan with a problem-solving approach and facilitate real estate decision-making with advanced strategies."
            />
            <ExpData
              title="Commitment"
              description="Our commitment to those joining us in our ventures is reliability and transparency. We aim to build strong partnerships based on mutual trust and reliance. We promise to keep updating ourselves with a futuristic approach to business and effective strategies. "
            />
            <ExpData
              title="High Standards"
              description="Our firm, representing a higher standard since 2018, is a boutique licensed Real Estate Sales & Marketing company, based in Islamabad. The core of our expertise is the sale of shops and apartments. based in Islamabad. The best in the market strategies "
            />
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
