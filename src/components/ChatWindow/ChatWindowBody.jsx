import MessageCard from "./MessageCard";
import backgroundImg from "../../assets/chat_background.png";

function ChatWindowBody({ messages }) {
  return (
    <div
      className="w-full flex flex-col flex-grow overflow-auto gap-1 px-10 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {messages.map((message, i) => (
        <MessageCard
          key={i}
          text={message.text}
          timestamp={message.timestamp}
          userId={message.userId}
        />
      ))}
    </div>
  );
}

export default ChatWindowBody;
