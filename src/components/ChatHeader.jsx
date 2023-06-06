import '../css/ChatHeader.css';
import ChatMessengerIcon from './ChatMessengerIcon';

export default function ChatHeader() {
  const botName = 'ZIVI';
  return (
    <div className="chat-header">
      <ChatMessengerIcon />
      <div className="chat-header-holder">
        <div className="chat-header-name">{botName}</div>
        <div className="chat-header-status">
          <div className="green-dot" />
          Online
        </div>
      </div>
    </div>
  );
}
