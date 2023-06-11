import "../css/frontpage.css";
import "swiper/css";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

import BotImage from "../assets/Bot.svg";
import Language from "../assets/language.svg";
import Wave from "../assets/wave.svg";

function LanguageButton({ language, setLanguage }) {
  const [ifOpen, setIfOpen] = useState(false);
  const variants = {
    initial: {
      opacity: 0,
      x: 20,
    },
    animate: {
      opacity: 1,
      x: -20,
      translateY: "-50%",
    },
    exit: {
      opacity: 0,
      x: -20,
    },
  };
  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        setIfOpen(!ifOpen);
      }}
      className="language-button"
    >
      <img src={Language} alt="Change Language" />
      {ifOpen === true ? (
        <motion.div
          variants={variants}
          initial="initial"
          exit="exit"
          animate="animate"
          className="select-language"
        >
          <button
            className={
              "set-language" + (language === "english" ? " selected" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setLanguage("english");
            }}
          >
            English
          </button>
          <button
            className={
              "set-language" + (language === "malayalam" ? " selected" : "")
            }
            onClick={(e) => {
              e.preventDefault();
              setLanguage("malayalam");
            }}
          >
            മലയാളം
          </button>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}
function TestimonialSlider({ testimonials, language }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      className="testimonial-holder"
    >
      {testimonials.map((testimonial, i) => {
        return (
          <SwiperSlide className="testimonial" key={`test${i}`}>
            <p className="testimonial-description">
              {testimonial.description[language]}
            </p>
            <h3 className="testimonial-name">{testimonial.name}</h3>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

const menu = document.getElementById("#menu");
function FrontPage({ variants, language, setLanguage, testimonials }) {
  const newNav = useNavigate();
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
                <a href="https://breadsbangalore.org/">
                  {language === "english" ? "Home" : "വീട്"}
                </a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="">
                  {language === "english" ? "About Us" : "ഞങ്ങളേക്കുറിച്ച്"}
                </a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="">
                  {language === "english"
                    ? "Talk with Zivi"
                    : "സിവിയുമായി സംസാരിക്കുക"}
                </a>
              </motion.li>
              <motion.li
                className="hamburger"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <a href="https://breadsbangalore.org/dream">
                  {language === "english"
                    ? "Our Projects"
                    : "ഞങ്ങളുടെ പദ്ധതികൾ"}
                </a>
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
                <a href="https://breadsbangalore.org/contact">
                  {language === "english" ? "Contact" : "ബന്ധപ്പെടുക"}
                </a>
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
          <p className="bot-intro">
            {language === "english"
              ? `Hi! I am Zivi Your personal Chatbot`
              : `ഹായ്! ഞാൻ സിവി നിങ്ങളുടെ സ്വകാര്യ ചാറ്റ്ബോട്ട് ആണ്`}
          </p>
          <Link to={"/chat"} className="chat-button">
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "english" ? "Let's chat" : "നമുക്ക് ചാറ്റ് ചെയ്യാം"}
            </motion.div>
          </Link>
          <Link
            to={"/chat"}
            onClick={(e) => {
              e.preventDefault();
              const chatPage = () => newNav("/chat");
              localStorage.setItem(
                "formID",
                localStorage.getItem("volunteerFormID")
              );
              chatPage();
            }}
            className="chat-button volunteer"
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {language === "english"
                ? "I wish to volunteer"
                : "നമുക്ക് ചാറ്റ് ചെയ്യാം"}
            </motion.div>
          </Link>
          <LanguageButton setLanguage={setLanguage} language={language} />
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
            className="heading"
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
            {language === "english"
              ? `IT'S OKAY TO DREAM`
              : `സ്വപ്നം കാണാൻ കുഴപ്പമില്ല`}
          </motion.h2>
          <motion.p
            variants={descriptionVariant}
            transition={{
              delay: 1,
            }}
            className="description"
          >
            {language === "english"
              ? `Drug Rehabilitation Education and Mentoring (DREAM) is a
            rights-based initiative of BREADS started in November 2021, which
            aims to empower lakhs of children and youth to dream beyond drugs.
            DREAM specifically focuses on children, especially adolescents and
            youth who can easily fall prey to drug abuse.`
              : `ഡ്രഗ് റിഹാബിലിറ്റേഷൻ എഡ്യൂക്കേഷൻ ആൻഡ് മെന്ററിംഗ് (ഡ്രീം) ആണ് എ
            ബ്രെഡ്‌സിന്റെ അവകാശങ്ങൾ അടിസ്ഥാനമാക്കിയുള്ള സംരംഭം 2021 നവംബറിൽ ആരംഭിച്ചു
            മയക്കുമരുന്നിനപ്പുറം സ്വപ്നം കാണാൻ ലക്ഷക്കണക്കിന് കുട്ടികളെയും യുവാക്കളെയും ശാക്തീകരിക്കുകയാണ് ലക്ഷ്യം.
            ഡ്രീം പ്രത്യേകമായി കുട്ടികളിൽ, പ്രത്യേകിച്ച് കൗമാരക്കാരിൽ ശ്രദ്ധ കേന്ദ്രീകരിക്കുന്നു
            മയക്കുമരുന്ന് ദുരുപയോഗത്തിന് എളുപ്പത്തിൽ ഇരയാകാൻ കഴിയുന്ന യുവാക്കൾ.`}
          </motion.p>
        </motion.div>
      </div>
      <div className="wave-container reverse">
        <img src={Wave} alt="Wave" />
      </div>
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{
          once: false,
          amount: 0.5,
        }}
        className="testimonials"
      >
        <motion.h2
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
          className="heading"
        >
          {language === "english" ? "TESTIMONIALS" : "സാക്ഷ്യപത്രങ്ങൾ"}
        </motion.h2>
        <TestimonialSlider testimonials={testimonials} language={language} />
      </motion.div>
    </motion.div>
  );
}

export default FrontPage;
