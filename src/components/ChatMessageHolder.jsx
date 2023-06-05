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
            {message.answers.map((answer, idx) => (
              <AnswerMessage key={`o${idx}`} message={answer} />
            ))}
          </Fragment>
        );
      })}
    </section>
  );
}
