import "../css/frontpage.css";
import React, { useEffect, useState } from "react";
import { animate, motion } from "framer-motion";
import Wave from "../assets/wave.svg";
import { Link, Route } from "react-router-dom";

import BotImage from "../assets/Bot.svg";
const menu = document.getElementById("#menu");
function FrontPage({ variants }) {
  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive);
  };
  const descriptionVariant = {
    offscreen: {
      y: 10,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      rotate: -8,
      transition: {
        type: "spring",
        bounce: 0.4,
      },
    },
  };
  return (
    <motion.div
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
    >
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
            <motion.ul className={isActive ? null : "menu-open"}>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://breadsbangalore.org/">Home</a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="">About Us</a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="">Talk with Zivi</a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://breadsbangalore.org/dream">Our Projects</a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://breadsbangalore.org/CSR">CSR</a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://breadsbangalore.org/contact">Contact</a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
        <img className="breads-logo" src={require("../assets/logo.png")} />
      </nav>
      <div className="container">
        <div className="chatbot-container">
          <motion.div
            className="bot-img-bg"
            initial={{
              y: -30,
              opacity: 0,
              rotate: 20,
            }}
            animate={{
              y: 0,
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              delay: 0.9,
              type: "spring",
              damping: 20,
            }}
          >
            <img className="bot-img" src={BotImage} />
          </motion.div>
          <p className="bot-intro">{`Hi! I am Zivi Your personal Chatbot`}</p>
          <Link to={"/chat"} className="chat-button">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Let's chat
            </motion.div>
          </Link>
        </div>

        <div className="wave-container">
          <img src={Wave} alt="Wave" />
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{
            once: false,
            amount: 0.5,
          }}
          className="description-container"
        >
          <motion.h2
            className="description-heading"
            variants={{
              offscreen: {
                x: 30,
                opacity: 0,
              },
              onscreen: {
                x: 0,
                opacity: 1,
              },
            }}
          >
            IT'S OKAY TO DREAM
          </motion.h2>
          <motion.p
            variants={descriptionVariant}
            transition={{
              delay: 1,
            }}
            className="description"
          >
            Drug Rehabilitation Education and Mentoring (DREAM) is a
            rights-based initiative of BREADS started in November 2021, which
            aims to empower lakhs of children and youth to dream beyond drugs.
            DREAM specifically focuses on children, especially adolescents and
            youth who can easily fall prey to drug abuse.
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FrontPage;
