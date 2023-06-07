import "../css/frontpage.css";
import React, { useEffect, useState } from "react";
import Wave from "../assets/wave.svg";
import { Link } from "react-router-dom";

import BotImage from "../assets/Bot.svg";
const menu = document.getElementById("#menu");
function FrontPage() {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="menu">
          <div
            className={
              isActive ? "hamburger-icon" : "hamburger-icon icon-transform"
            }
            onClick={ToggleClass}
          >
            <div id="bar1" className="hamburger-icon-bar"></div>
            <div id="bar2" className="hamburger-icon-bar"></div>
            <div id="bar3" className="hamburger-icon-bar"></div>
          </div>
          <div id="menu-content">
            <ul className={isActive ? null : "menu-open"}>
              <li className="hamburger">
                <a href="https://breadsbangalore.org/">Home</a>
              </li>
              <li className="hamburger">
                <a href="">About Us</a>
              </li>
              <li className="hamburger">
                <a href="">Talk with Zivi</a>
              </li>
              <li className="hamburger">
                <a href="https://breadsbangalore.org/dream">Our Projects</a>
              </li>
              <li className="hamburger">
                <a href="https://breadsbangalore.org/CSR">CSR</a>
              </li>
              <li className="hamburger">
                <a href="https://breadsbangalore.org/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <img className="breads-logo" src={require("../assets/logo.png")} />
      </nav>
      <div className="container">
        <div className="chatbot-container">
          <div className="bot-img-bg">
            <img className="bot-img" src={BotImage} />
          </div>
          <p className="bot-intro">{`Hi! I am Zivi Your personal Chatbot`}</p>
          <Link to={"/chat"} className="chat-button">
            Let's chat
          </Link>
        </div>
        <div className="description-container">
          <div className="wave-container">
            <img src={Wave} alt="Wave" />
          </div>
          <p className="description">
            Drug Rehabilitation Education and Mentoring (DREAM) is a
            rights-based initiative of BREADS started in November 2021, which
            aims to empower lakhs of children and youth to dream beyond drugs.
            DREAM specifically focuses on children, especially adolescents and
            youth who can easily fall prey to drug abuse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
