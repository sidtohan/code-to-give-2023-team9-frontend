import "../css/ChatMessageHolder.css";
import { Fragment } from "react";
import { AnswerMessage, QuestionMessage } from "./ChatMessage";
export default function ChatMessageHolder({ messages }) {
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
