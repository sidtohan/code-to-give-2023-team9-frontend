import FrontPage from "./components/FrontPage";
import "./css/App.css";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<FrontPage />} />
        <Route exact path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
