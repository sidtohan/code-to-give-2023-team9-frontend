import "../css/Chat.css";
import ChatHeader from "../components/ChatHeader";
import ChatMessageHolder from "../components/ChatMessageHolder";

export default function Chat() {
  return (
    <div className="chat">
      <ChatHeader />
      <ChatMessageHolder />
    </div>
  );
}
