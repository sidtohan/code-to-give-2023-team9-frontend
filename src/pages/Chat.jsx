import "../css/Chat.css";
import { useEffect, useRef, useState } from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessageHolder from "../components/ChatMessageHolder";
import ChatForm from "../components/ChatForm";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      question: "Hello! Your responses will appear here.",
      answers: ["Alright"],
    },
  ]);
  const [question, setQuestion] = useState({
    question: "What is frequency of drug consumption?",
    type: "multi",
    options: ["Daily", "Monthly", "Weekly", "Yearly"],
  });
  const messageHolderRef = useRef();
  useEffect(() => {
    messageHolderRef.current.scrollTop = messageHolderRef.current.scrollHeight;
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
