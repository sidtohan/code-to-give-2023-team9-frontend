import "../css/ChatForm.css";
import { useRef, useState } from "react";
import ChatFormBot from "./ChatFormBot";
import Loader from "./Loader";

function ChatOption({
  option,
  index,
  answers,
  setAnswers,
  optionLimit,
  question,
  setQuestion,
  language,
}) {
  const [checked, setChecked] = useState(false);
  const labelRef = useRef();
  const val =
    question.type === "multi-correct"
      ? option[language]
      : option.option[language];
  const handleChange = () => {
    if (checked === false) {
      const newAnswers = [...answers, val];
      setAnswers(newAnswers);
      if (question.type === "single-correct") {
        // Modify next of question
        // that is needed for the single correct question
        setQuestion({
          ...question,
          nextLink: option.next ? option.next["_path"].segments[3] : null,
        });
      }
    } else {
      const newAnswers = [...answers];
      newAnswers.splice(newAnswers.indexOf(val), 1);
      setAnswers(newAnswers);
    }
    labelRef.current.classList.toggle("invert");
    setChecked(!checked);
  };
  return (
    <label
      className={
        "chat-option" +
        (checked === false && answers.length >= optionLimit ? " disabled" : "")
      }
      htmlFor={index}
      ref={labelRef}
    >
      <input
        type="checkbox"
        id={index}
        name="option"
        value={option}
        checked={checked}
        onChange={handleChange}
        disabled={checked === false && answers.length >= optionLimit}
      />
      {question.type === "single-correct"
        ? option.option[language]
        : option[language]}
    </label>
  );
}
const ChatFormOptions = ({
  question,
  answers,
  setAnswers,
  setQuestion,
  language,
}) => {
  const optionLimit = question.type === "multi-correct" ? 5 : 1;
  return (
    <div className="option-list">
      {question.options.map((option, i) => {
        return (
          <ChatOption
            question={question}
            setQuestion={setQuestion}
            key={`${question.key}${i}`}
            option={option}
            index={i}
            answers={answers}
            setAnswers={setAnswers}
            optionLimit={optionLimit}
            language={language}
          />
        );
      })}
    </div>
  );
};
const ChatFormSlider = ({ question, setAnswers }) => {
  const minVal = question.minLength;
  const maxVal = question.maxLength;
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

const ChatFormText = ({ setAnswers, language }) => {
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
        placeholder={
          language === "english"
            ? "Enter your answer"
            : "നിങ്ങളുടെ ഉത്തരം നൽകുക"
        }
        className="input-box"
      />
    </label>
  );
};
const DropDownButton = ({
  option,
  question,
  answers,
  setAnswers,
  setQuestion,
  language,
  optionLimit,
}) => {
  const [checked, setChecked] = useState(false);
  const labelRef = useRef();
  const val =
    question.type === "multi-correct"
      ? option[language]
      : option.option[language];
  const handleChange = (e) => {
    e.preventDefault();
    if (checked === false) {
      const newAnswers = [...answers, val];
      setAnswers(newAnswers);
      if (question.type === "single-correct") {
        // Modify next of question
        // that is needed for the single correct question
        setQuestion({
          ...question,
          nextLink: option.next ? option.next["_path"].segments[3] : null,
        });
      }
    } else {
      const newAnswers = [...answers];
      newAnswers.splice(newAnswers.indexOf(val), 1);
      setAnswers(newAnswers);
    }
    labelRef.current.classList.toggle("invert");
    setChecked(!checked);
  };
  return (
    <button
      onClick={handleChange}
      className={
        "drop-down-button" +
        (checked === false && answers.length >= optionLimit ? " disabled" : "")
      }
      ref={labelRef}
      disabled={
        checked === false && answers.length >= optionLimit ? " disabled" : ""
      }
    >
      {option.option[language]}
    </button>
  );
};
const DropDownOptions = ({
  question,
  setQuestion,
  answers,
  setAnswers,
  language,
}) => {
  const optionLimit = question.type === "multi-correct" ? 5 : 1;
  return (
    <div className="drop-down">
      {question.options.map((option, i) => {
        return (
          <DropDownButton
            key={`dd${question.text[language]}${i}`}
            option={option}
            setAnswers={setAnswers}
            setQuestion={setQuestion}
            question={question}
            language={language}
            optionLimit={optionLimit}
            answers={answers}
          />
        );
      })}
    </div>
  );
};
const RenderQuestion = ({
  question,
  answers,
  setAnswers,
  setQuestion,
  language,
}) => {
  if (!question) return <></>;
  if (question.type === "multi-correct" || question.type === "single-correct") {
    if (question.options.length <= 4)
      return (
        <ChatFormOptions
          question={question}
          setQuestion={setQuestion}
          answers={answers}
          setAnswers={setAnswers}
          language={language}
        />
      );
    else
      return (
        <DropDownOptions
          question={question}
          setQuestion={setQuestion}
          setAnswers={setAnswers}
          language={language}
          answers={answers}
        />
      );
  } else if (question.type === "slider")
    return <ChatFormSlider question={question} setAnswers={setAnswers} />;
  else return <ChatFormText setAnswers={setAnswers} language={language} />;
};
export default function ChatForm({
  question,
  setQuestion,
  messages,
  setMessages,
  userInfo,
  setUserInfo,
  answers,
  setAnswers,
  loading,
  language,
}) {
  const submitForm = (e) => {
    e.preventDefault();
    if (answers.length === 0) return;
    const newAnswers = [...answers];
    const newMessages = [
      ...messages,
      {
        question: question.text[language],
        answers: newAnswers,
      },
    ];
    const key = question.key;
    const newUserInfo = { ...userInfo };
    if (question.type === "multi-correct") newUserInfo[key] = answers;
    else newUserInfo[key] = answers[0];
    setUserInfo(newUserInfo);
    setMessages(newMessages);
  };

  return (
    <section className="chat-form">
      {loading === true ? (
        <Loader />
      ) : (
        <>
          <h2 className="form-heading">
            {question ? question.text[language] : ""}
          </h2>
          <form onSubmit={submitForm}>
            <RenderQuestion
              question={question}
              setQuestion={setQuestion}
              answers={answers}
              setAnswers={setAnswers}
              submitForm={submitForm}
              language={language}
            />
          </form>
          <ChatFormBot submitForm={submitForm} answers={answers} />
        </>
      )}
    </section>
  );
}
