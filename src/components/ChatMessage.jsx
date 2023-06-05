import "../css/ChatMessage.css";
import ChatMessengerIcon from "./ChatMessengerIcon";
export function QuestionMessage({ message }) {
  return (
    <div className="chat-message-question">
      <ChatMessengerIcon />
      <span className="chat-message-content">{message}</span>
    </div>
  );
}

export function AnswerMessage({ message }) {
  return (
    <div className="chat-message-answer">
      <span className="chat-message-content"> {message} </span>
    </div>
  );
}
