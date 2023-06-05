import React, { useEffect, useState } from "react";
import "../css/frontpage.css";

const menu = document.getElementById("#menu");
// const navMenu= document.querySelector(".nav-menu")
// menu.addEventListener("click", () => {
//   document.getElementById("#menu").classList.toggle("icon");
//   document.getElementById("#menu-content").classList.toggle("change");
// });

function Frontpage() {
  // {/* <object data={require("../assets/Bot.svg")}/> */}
  //   <img className="burger-bar" src={require("../assets/burger-bar.png")} />
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <nav className="frontpage navbar">
        <div className="menu">
          <div
            className={isActive ? "hamburger-menu icon" : "hamburger-menu"}
            id="menu"
            onClick={ToggleClass}
          >
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
          <div id="menu-content">
            <ul className={isActive ? "change" : null}>
              <li className="hamburger">
                <a>Home</a>
              </li>
              <li className="hamburger">
                <a>About Us</a>
              </li>
              <li className="hamburger">
                <a>Talk with Zivi</a>
              </li>
              <li className="hamburger">
                <a>Our Projects</a>
              </li>
              <li className="hamburger">
                <a>CSR</a>
              </li>
              <li className="hamburger">
                <a>Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <img className="breads-logo" src={require("../assets/logo.png")} />
      </nav>
      <div className="container">
        <div className="frontpage chatbot-container">
          <div className="bot-img-bg">
            <img className="bot-img" src={require("../assets/Bot.png")} />
          </div>
          <p className="bot-intro">{`H! I am Zivi Your personal Chatbot`}</p>
          <button className="chat-button">Let's have a chat</button>
        </div>
        <div className="frontpage description-container">
          <p className="description">
            Drug Rehabilitation Education and Mentoring (DREAM) is a
            rights-based initiative of BREADS started in November 2021, which
            aims to empower lakhs of children and youth to dream beyond drugs.
            DREAM specifically focuses on ildren, especially adolescents and
            youth. who can easily fall prey to drug abuse.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Frontpage;
