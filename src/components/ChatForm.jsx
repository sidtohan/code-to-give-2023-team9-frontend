import "../css/ChatForm.css";
import { useRef, useState } from "react";
import ChatFormBot from "./ChatFormBot";

function ChatOption({ option, index, answers, setAnswers }) {
  const [checked, setChecked] = useState(false);
  const labelRef = useRef();
  const handleChange = () => {
    if (checked === false) {
      const newanswers = [...answers, option];
      setAnswers(newanswers);
    } else {
      const newanswers = [...answers];
      newanswers.pop();
      setAnswers(newanswers);
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
      {option}
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
const RenderQuestion = ({ question, answers, setAnswers, submitForm }) => {
  if (question.type === "option")
    return (
      <ChatFormOptions
        question={question}
        answers={answers}
        setAnswers={setAnswers}
        submitForm={submitForm}
      />
    );
  else if (question.type === "range")
    return (
      <ChatFormSlider
        question={question}
        answers={answers}
        setAnswers={setAnswers}
      />
    );
};
export default function ChatForm({ question, messages, setMessages }) {
  const [answers, setAnswers] = useState([]);
  const submitForm = (e) => {
    e.preventDefault();
    const newMessages = [
      ...messages,
      {
        question: question.question,
        answers: answers,
      },
    ];
    setMessages(newMessages);
  };

  return (
    <section className="chat-form">
      <h2 className="form-heading">{question.question}</h2>
      <form>
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
