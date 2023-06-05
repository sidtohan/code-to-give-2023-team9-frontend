import "../css/Chat.css";
import { useState } from "react";
import ChatHeader from "../components/ChatHeader";
import ChatMessageHolder from "../components/ChatMessageHolder";
import ChatForm from "../components/ChatForm";

export default function Chat() {
  const [messages, setMessages] = useState([
    { question: "Hello! Your responses will appear here.", answer: "Alright." },
  ]);
  const question = {
    question: "What is your name?",
    type: "multi",
    options: ["Hello", "Bye", "Go Away"],
  };
  return (
    <div className="chat">
      <ChatHeader />
      <ChatMessageHolder messages={messages} />
      <ChatForm question={question} />
    </div>
  );
}
