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
      description: {
        english:
          "DREAM enabled me to be a better version of myself. At first I was afraid, but the kindness of everyone got through to me and I was successfully able to overcome my addiction",
        malayalam:
          "എന്റെ ഒരു മികച്ച പതിപ്പാകാൻ ഡ്രീം എന്നെ പ്രാപ്തമാക്കി. ആദ്യം എനിക്ക് ഭയമായിരുന്നു, പക്ഷേ എല്ലാവരുടെയും ദയ എന്നിലേക്ക് കടന്നു, എന്റെ ആസക്തിയെ വിജയകരമായി മറികടക്കാൻ എനിക്ക് കഴിഞ്ഞു.",
      },
    },
    {
      name: "Rohit",
      description: {
        english:
          "Thanks to DREAM, I transformed into an improved version of myself. Initially filled with fear, the compassion of those around me broke through, empowering me to conquer my addiction effectively.",
        malayalam:
          "DREAM-ന് നന്ദി, ഞാൻ എന്റെ ഒരു മെച്ചപ്പെട്ട പതിപ്പായി രൂപാന്തരപ്പെട്ടു. തുടക്കത്തിൽ ഭയം നിറഞ്ഞു, എനിക്ക് ചുറ്റുമുള്ളവരുടെ അനുകമ്പ പൊട്ടിപ്പുറപ്പെട്ടു, എന്റെ ആസക്തിയെ ഫലപ്രദമായി കീഴടക്കാൻ എന്നെ ശക്തിപ്പെടുത്തി.",
      },
    },
    {
      name: "Ravi",
      description: {
        english:
          "DREAM empowered me to become an improved version of who I am. Initially, fear gripped me, but the compassion of those around me resonated deeply, enabling me to triumph over my addiction.",
        malayalam:
          "ഞാൻ ആരാണെന്നതിന്റെ മെച്ചപ്പെട്ട പതിപ്പായി മാറാൻ ഡ്രീം എന്നെ പ്രാപ്തയാക്കി. തുടക്കത്തിൽ, ഭയം എന്നെ പിടികൂടി, പക്ഷേ എന്റെ ചുറ്റുമുള്ളവരുടെ അനുകമ്പ ആഴത്തിൽ പ്രതിധ്വനിച്ചു, എന്റെ ആസക്തിയിൽ വിജയിക്കാൻ എന്നെ പ്രാപ്തയാക്കി.",
      },
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
                setLanguage={setLanguage}
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
            element={<EndingPage variants={variants} language={language} />}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
