import "./css/App.css";
import FrontPage from "./pages/FrontPage";
import Chat from "./pages/Chat";
import EndingPage from "./pages/EndingPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/ending" element={<EndingPage />} />
      </Routes>
    </div>
  );
}

export default App;
