import "./css/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FrontPage from "./pages/FrontPage";
import Chat from "./pages/Chat";
import EndingPage from "./pages/EndingPage";

function App() {
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
            element={<FrontPage variants={variants} language={language} />}
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
