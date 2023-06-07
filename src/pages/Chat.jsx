import "../css/Chat.css";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessageHolder from "../components/ChatMessageHolder";
import ChatForm from "../components/ChatForm";
import { useNavigate } from "react-router-dom";

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      question: "Hello! Your responses will appear here.",
      answers: ["Alright"],
    },
  ]);
  const [questionIdx, setQuestionIdx] = useState(0);
  const [questionList, setQuestionList] = useState([
    { question: "What is your name?", type: "text" },
    {
      question: "What is the frequence of your drug consumption?",
      type: "option",
      options: ["Daily", "Weekly", "Biweekly", "Monthly"],
    },
    {
      question: "What is your age?",
      type: "range",
      min: 15,
      max: 60,
    },
  ]);
  const [question, setQuestion] = useState({
    question: "Welcome to the Chat. Select the below option to begin",
    type: "option",
    options: ["Yes"],
  });
  const messageHolderRef = useRef();
  const endingPage = () => navigate("/ending");
  useEffect(() => {
    messageHolderRef.current.scrollTop = messageHolderRef.current.scrollHeight;
    if (questionIdx === questionList.length) endingPage();
    setQuestion(questionList[questionIdx]);
    setQuestionIdx(questionIdx + 1);
  }, [messages]);
  return (
    <div className="chat">
      <ChatHeader />
      <ChatMessageHolder messages={messages} ref={messageHolderRef} />
      <ChatForm
        question={question}
        messages={messages}
        setMessages={setMessages}
        messageHolderRef={messageHolderRef}
      />
    </div>
  );
}
