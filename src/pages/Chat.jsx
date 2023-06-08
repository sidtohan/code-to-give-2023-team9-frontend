import "../css/Chat.css";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ChatHeader from "../components/ChatHeader";
import ChatMessageHolder from "../components/ChatMessageHolder";
import ChatForm from "../components/ChatForm";
import { useNavigate } from "react-router-dom";
import { fetchQuestions, submitResponse } from "../utils/apiCall";

export default function Chat({ variants }) {
  // Page for Chat
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      question: "Hello! Your responses will appear here.",
      answers: ["Alright"],
    },
  ]);
  const [questionList, setQuestionList] = useState({});
  const [question, setQuestion] = useState({
    text: "Welcome to the Chat. Select the below option to begin",
    type: "option",
    options: ["Yes"],
    next: 1,
  });
  const [userInfo, setUserInfo] = useState({});
  const messageHolderRef = useRef();
  const endingPage = () => navigate("/ending");

  // Set new question
  useEffect(() => {
    messageHolderRef.current.scrollTop = messageHolderRef.current.scrollHeight;
    if (question.nextLink === null) {
      // Ends here
      (async () => {
        await submitResponse(userInfo, "IDtwe0lZDI7dBSeoHOZm");
        endingPage();
      })();
    } else setQuestion(questionList[question.nextLink]);
  }, [messages]);

  // Initial Call
  useEffect(() => {
    (async () => {
      const { start, navigator } = await fetchQuestions("IDtwe0lZDI7dBSeoHOZm");
      setQuestionList(navigator);
      setQuestion(navigator[start]);
    })();
    return () => {
      // anything like loading etc
    };
  }, []);
  return (
    <motion.div
      className="chat"
      variants={variants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
    >
      <ChatHeader />
      <ChatMessageHolder messages={messages} ref={messageHolderRef} />
      <ChatForm
        question={question}
        setQuestion={setQuestion}
        messages={messages}
        setMessages={setMessages}
        messageHolderRef={messageHolderRef}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
    </motion.div>
  );
}
