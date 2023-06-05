import "../css/ChatForm.css";
import { useRef, useState } from "react";
import chatWave from "../assets/chatWave.svg";
import ChatFormBot from "./ChatFormBot";

function ChatOption({ option, index }) {
  const [checked, setChecked] = useState(false);
  const labelRef = useRef();
  const handleChange = () => {
    labelRef.current.classList.toggle("invert");
    setChecked(!checked);
  };
  return (
    <label className="chat-option" htmlFor={index} ref={labelRef}>
      <input
        type="checkbox"
        id={index}
        name="option"
        value={option}
        checked={checked}
        onChange={handleChange}
      />
      {option}
    </label>
  );
}
export default function ChatForm({ question }) {
  return (
    <section className="chat-form">
      <ChatFormBot />
      <form>
        <h2 className="form-heading">{question.question}</h2>
        <div className="option-list">
          {question.options.map((option, i) => {
            return <ChatOption key={i} option={option} index={i} />;
          })}
        </div>
      </form>
      <div className="chat-wave">
        <img src={chatWave} alt="Wavy curve" />
      </div>
    </section>
  );
}
