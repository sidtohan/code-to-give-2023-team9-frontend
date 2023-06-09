import "./css/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FrontPage from "./pages/FrontPage";
import Chat from "./pages/Chat";
import EndingPage from "./pages/EndingPage";

function App() {
  const testimonials = [
    {
      name: "Siddhant",
      description:
        "DREAM enabled me to be a better version of myself. At first I was afraid, but the kindness of everyone got through to me and I was successfully able to overcome my addiction",
    },
    {
      name: "Rohit",
      description:
        "Thanks to DREAM, I transformed into an improved version of myself. Initially filled with fear, the compassion of those around me broke through, empowering me to conquer my addiction effectively.",
    },
    {
      name: "Ravi",
      description:
        "DREAM empowered me to become an improved version of who I am. Initially, fear gripped me, but the compassion of those around me resonated deeply, enabling me to triumph over my addiction.",
    },
  ];
  const variants = {
    initial: {
      opacity: 0,
      x: "100vw",
    },
    animate: {
      opacity: 1,
      x: "0",
    },
    exit: {
      opacity: 0,
      x: "-100vw",
    },
  };
  const [language, setLanguage] = useState("english");
  const location = useLocation();
  return (
    <div className="app">
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route
            exact
            path="/"
            element={
              <FrontPage
                variants={variants}
                language={language}
                testimonials={testimonials}
              />
            }
          />
          <Route
            exact
            path="/chat"
            element={<Chat variants={variants} language={language} />}
          />
          <Route
            exact
            path="/ending"
            element={<EndingPage variants={variants} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
