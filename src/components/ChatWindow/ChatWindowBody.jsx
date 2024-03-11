import MessageCard from "./MessageCard";
import backgroundImg from "../../assets/chat_background.png";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import useSelectedChat from "../../hooks/useSelectedChat";
import useSelectedContact from "../../hooks/useSelectedContact";

function ChatWindowBody() {
  const newMessages = useSelector((state) => state.chat.newMessages);
  const currentContact = useSelectedContact();
  const windowBottom = useRef(null);
  const currentChat = useSelectedChat(currentContact);
  const [messages, setMessages] = useState(currentChat?.messages || []);

  useEffect(() => {
      if (newMessages.length > 0) {
        setMessages([...currentChat.messages, ...newMessages]);
      } else {
        if (currentChat?.messages) {
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
      {currentChat.messages.length === 0 && messages.length === 0 ? (
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
