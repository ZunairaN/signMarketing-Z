import React, { useEffect, useState } from "react";
import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import {
  Navigate,
  useNavigate,
  Link,
  useHistory,
  NavLink,
} from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import LogoSign from "../../Assets/LogoSign.png";

const Navbar = ({ visible }) => {
  console.log("visible", visible);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeHome, setActiveHome] = useState(true);
  const [activeAbout, setActiveAbout] = useState(false);
  const [activeProject, setActiveProject] = useState(false);
  const [activeProduct, setActiveProduct] = useState(false);
  const [activeContact, setActiveContact] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [islink, setIsLink] = useState(false);

  function scrolldiv(scroll) {
    var elem = document.getElementById(scroll);
    elem.scrollIntoView({ behavior: "smooth" });
  }

  const ActiveLink = (name) => {
    if (name === "Home") {
      setActiveHome(true);
      setActiveAbout(false);
      setActiveProject(false);
      setActiveProduct(false);
      setActiveContact(false);
    } else if (name === "About") {
      setActiveHome(false);
      setActiveAbout(true);
      setActiveProject(false);
      setActiveProduct(false);
      setActiveContact(false);
    } else if (name === "Project") {
      setActiveHome(false);
      setActiveAbout(false);
      setActiveProject(true);
      setActiveProduct(false);
      setActiveContact(false);
    } else if (name === "Product") {
      setActiveHome(false);
      setActiveAbout(false);
      setActiveProject(false);
      setActiveProduct(true);
      setActiveContact(false);
    } else if (name === "Contact") {
      setActiveHome(false);
      setActiveAbout(false);
      setActiveProject(false);
      setActiveProduct(false);
      setActiveContact(true);
    }
    console.log("activeContact", activeContact);
  };

  const ScrollScreen = () => {
    if (window.scrollY > 0) {
      setToggleMenu(false);
    }
  };

  const activeMenu = () => {
    if (window.scrollY === 0 && window.scrollY <= 800) {
      ActiveLink("Home");
    } else if (window.scrollY >= 800 && window.scrollY <= 1550) {
      ActiveLink("About");
    } else if (window.scrollY >= 1550 && window.scrollY <= 2550) {
      ActiveLink("Project");
    } else if (window.scrollY >= 2550 && window.scrollY <= 3200) {
      ActiveLink("Product");
    } else if (window.scrollY >= 3200) {
      ActiveLink("Contact");
    }
  };

  window.addEventListener("scroll", ScrollScreen);
  window.addEventListener("scroll", activeMenu);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
        setToggleMenu(false);
      } else if (window.scrollY === 0) {
        setIsScrolling(false);
        setIsLink(false);
      }
    });
  });

  // const li = document.querySelectorAll("");

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setToggleMenu(false);
        }}
      >
        <div
          className={
            isScrolling
              ? "App_Nav_Container Active_Header"
              : "App_Nav_Container"
          }
        >
          <div className="Imge_wrapper">
            <img src={LogoSign} alt="logo" />
          </div>
          <>
            <ul
              className={
                isScrolling
                  ? "App_Links_Wrapper_Active App_Links_Wrapper"
                  : "App_Links_Wrapper "
              }
            >
              <li
                onClick={() => {
                  ActiveLink("Home");
                  scrolldiv("Header_Section");
                  setToggleMenu(false);
                }}
                className={activeHome ? "Active_Link" : ""}
              >
                Home
              </li>
              <li
                onClick={() => {
                  ActiveLink("About");
                  scrolldiv("About_Section");
                  setToggleMenu(false);
                }}
                className={activeAbout ? "Active_Link " : ""}
              >
                About Us
              </li>
              <li
                onClick={() => {
                  ActiveLink("Project");
                  scrolldiv("Project_Section");
                  setToggleMenu(false);
                }}
                className={activeProject ? "Active_Link" : ""}
              >
                Projects
              </li>
              <li
                onClick={() => {
                  ActiveLink("Product");
                  scrolldiv("Product_Section");
                  setToggleMenu(false);
                }}
                className={activeProduct ? "Active_Link" : ""}
              >
                Products
              </li>
              <li
                onClick={() => {
                  ActiveLink("Contact");
                  scrolldiv("Contact_Section");
                  setToggleMenu(false);
                }}
                className={activeContact ? "Active_Link" : ""}
              >
                Contact
              </li>
            </ul>
            <div className="App_Smaller_Devices">
              <div className="Toggle_Btn">
                <RiMenu3Line
                  color="white"
                  size={30}
                  onClick={() => setToggleMenu(true)}
                />
              </div>
              {toggleMenu && (
                <>
                  <div className="App_Links-Wrapper_OverLay">
                    <RiCloseLine
                      color="white"
                      size={32}
                      onClick={() => setToggleMenu(false)}
                      style={{
                        position: "absolute",
                        right: 18,
                        top: 32,
                        backgroundColor: "red",
                        padding: "2px",
                        borderRadius: "3px",
                        boxShadow: "0px 0px 20px rgba(255, 0, 0, 1)",
                        transition: "200ms ease-in-out",
                      }}
                    />

                    <ul className="App_Links_Wrapper_SmallScreen_links">
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                          ActiveLink("Home");
                          scrolldiv("Header_Section");
                        }}
                        className={activeHome ? "Active_Link_Small_device" : ""}
                      >
                        Home
                      </li>
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                          ActiveLink("About");
                          scrolldiv("About_Section");
                        }}
                        className={
                          activeAbout ? "Active_Link_Small_device " : ""
                        }
                      >
                        About
                      </li>
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                          ActiveLink("Project");
                          scrolldiv("Project_Section");
                        }}
                        className={
                          activeProject ? "Active_Link_Small_device" : ""
                        }
                      >
                        Project
                      </li>
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                          ActiveLink("Product");
                          scrolldiv("Product_Section");
                        }}
                        className={
                          activeProduct ? "Active_Link_Small_device" : ""
                        }
                      >
                        Product
                      </li>
                      <li
                        onClick={() => {
                          setToggleMenu(false);
                          ActiveLink("Contact");
                          scrolldiv("Contact_Section");
                        }}
                        className={
                          activeContact ? "Active_Link_Small_device" : ""
                        }
                      >
                        Contact
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </div>
          </>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default Navbar;
