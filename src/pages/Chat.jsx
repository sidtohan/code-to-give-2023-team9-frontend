import "../css/Chat.css";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessageHolder from "../components/ChatMessageHolder";
import ChatForm from "../components/ChatForm";
import { useNavigate } from "react-router-dom";
import { fetchQuestions } from "../utils/apiCall";

export default function Chat() {
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
    if (question.next === null) {
      // Ends here
      console.log(userInfo);
      endingPage();
    }
    setQuestion(questionList[question.next]);
  }, [messages]);

  // Initial Call
  useEffect(() => {
    (async () => {
      const { start, navigator } = await fetchQuestions("N3ko6oWFCTLO9BWiqgdD");
      setQuestionList(navigator);
      setQuestion(navigator[start]);
    })();
    return () => {
      // anything like loading etc
    };
  }, []);
  return (
    <div className="chat">
      <ChatHeader />
      <ChatMessageHolder messages={messages} ref={messageHolderRef} />
      <ChatForm
        question={question}
        messages={messages}
        setMessages={setMessages}
        messageHolderRef={messageHolderRef}
        userInfo={userInfo}
        setUserInfo={setUserInfo}
      />
    </div>
  );
}
