import MessageCard from "./MessageCard";
import backgroundImg from "../../assets/chat_background.png";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";


function ChatWindowBody({ currentChat }) {
  const [messages, setMessages] = useState(currentChat?.messages || []);
  const newMessages = useSelector((state) => state.chat.newMessages);
  const windowBottom = useRef(null);

  useEffect(() => {
    if (currentChat?.messages) {
      if (newMessages.length > 0) {
        setMessages([...currentChat.messages, ...newMessages]);
      } else {
        setMessages([...currentChat.messages]);
      }

    }
  }, [newMessages, currentChat]);

  useEffect(() => {
    windowBottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="w-full flex flex-col flex-grow overflow-auto gap-1 px-10 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {currentChat === undefined ? (
        <div className="flex flex-grow items-center justify-center">
          <p className="text-gray-500">Start a conversation</p>
        </div>
      ) : (
        messages.map((message, i) => (
          <MessageCard
            key={i}
            text={message.text}
            timestamp={message.timestamp}
            userId={message.userId}
          />
        ))
      )}
      <div ref={windowBottom} />
    </div>
  );
}

export default ChatWindowBody;
