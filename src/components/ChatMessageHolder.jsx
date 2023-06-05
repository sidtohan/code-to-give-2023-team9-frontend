import "../css/ChatMessageHolder.css";
import { Fragment, useEffect, useState } from "react";
import { AnswerMessage, QuestionMessage } from "./ChatMessage";
export default function ChatMessageHolder() {
  const [messages, setMessages] = useState([
    { question: "Hello! Your responses will appear here.", answer: "Alright." },
  ]);
  return (
    <section className="chat-message-holder">
      {messages.map((message, i) => {
        return (
          <Fragment key={i}>
            <QuestionMessage message={message.question} />
            <AnswerMessage message={message.answer} />
          </Fragment>
        );
      })}
    </section>
  );
}
