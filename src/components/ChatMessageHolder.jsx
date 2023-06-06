import "../css/ChatMessageHolder.css";
import { Fragment, forwardRef } from "react";
import { AnswerMessage, QuestionMessage } from "./ChatMessage";
const ChatMessageHolder = forwardRef(({ messages }, ref) => {
  return (
    <section className="chat-message-holder" ref={ref}>
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
});

export default ChatMessageHolder;
