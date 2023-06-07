import "../css/ChatForm.css";
import { useRef, useState } from "react";
import ChatFormBot from "./ChatFormBot";

function ChatOption({ option, index, answers, setAnswers }) {
  const [checked, setChecked] = useState(false);
  const labelRef = useRef();
  const handleChange = () => {
    if (checked === false) {
      const newAnswers = [...answers, option.option];
      setAnswers(newAnswers);
    } else {
      const newAnswers = [...answers];
      newAnswers.pop();
      setAnswers(newAnswers);
    }
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
      {option.option}
    </label>
  );
}
const ChatFormOptions = ({ question, answers, setAnswers }) => {
  return (
    <div className="option-list">
      {question.options.map((option, i) => {
        return (
          <ChatOption
            key={`${question.question}${i}`}
            option={option}
            index={i}
            answers={answers}
            setAnswers={setAnswers}
          />
        );
      })}
    </div>
  );
};
const ChatFormSlider = ({ question, setAnswers }) => {
  const minVal = question.min;
  const maxVal = question.max;
  const [value, setValue] = useState(0);
  const handleChange = (e) => {
    setValue(e.target.value);
    setAnswers([e.target.value]);
  };
  return (
    <>
      <input
        type="range"
        id="input-slider"
        min={minVal}
        max={maxVal}
        value={value}
        onChange={handleChange}
      />
      <label className="input-slider" htmlFor="input-slider">
        {value}
      </label>
    </>
  );
};

const ChatFormText = ({ setAnswers }) => {
  const [textInput, setTextInput] = useState("");

  const handleTextChange = (e) => {
    setTextInput(e.target.value);
    if (e.target.value.length === 0) setAnswers([]);
    else setAnswers([e.target.value]);
  };
  return (
    <label htmlFor="input-text" className="input-text">
      <input
        id="input-text"
        type="text"
        value={textInput}
        onChange={handleTextChange}
        placeholder="Enter your answer"
        className="input-box"
      />
    </label>
  );
};
const RenderQuestion = ({ question, answers, setAnswers, submitForm }) => {
  if (question.type === "multi-correct" || question.type === "single-correct")
    return (
      <ChatFormOptions
        question={question}
        answers={answers}
        setAnswers={setAnswers}
        submitForm={submitForm}
      />
    );
  else if (question.type === "slider")
    return <ChatFormSlider question={question} setAnswers={setAnswers} />;
  else return <ChatFormText setAnswers={setAnswers} />;
};
export default function ChatForm({
  question,
  messages,
  setMessages,
  userInfo,
  setUserInfo,
}) {
  const [answers, setAnswers] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    if (answers.length === 0) return;
    const newMessages = [
      ...messages,
      {
        question: question.text,
        answers: answers,
      },
    ];
    const key = question.key;
    const newUserInfo = { ...userInfo };
    if (question.type === "multi-correct") newUserInfo[key] = answers;
    else newUserInfo[key] = answers[0];
    setUserInfo(newUserInfo);
    setMessages(newMessages);
    setAnswers([]);
  };

  return (
    <section className="chat-form">
      <h2 className="form-heading">{question ? question.text : ""}</h2>
      <form onSubmit={submitForm}>
        <RenderQuestion
          question={question}
          answers={answers}
          setAnswers={setAnswers}
          submitForm={submitForm}
        />
      </form>
      <ChatFormBot submitForm={submitForm} answers={answers} />
    </section>
  );
}
