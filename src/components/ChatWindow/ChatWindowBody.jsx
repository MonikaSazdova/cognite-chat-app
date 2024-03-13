import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useSelectedContact } from "../../hooks";
import MessageCard from "./MessageCard";
import backgroundImg from "../../assets/chat_background.png";

const ChatWindowBody = () => {
  const [messages, setMessages] = useState([]);
  const selectedContact = useSelectedContact();
  const updatedChats = useSelector((state) => state.chat.chats);
  const windowBottom = useRef(null);

  useEffect(() => {
    const selectedChat = updatedChats?.find((chat) =>
      chat.participants.includes(selectedContact?.userId)
    );
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [updatedChats, selectedContact]);

  useEffect(() => {
    windowBottom.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  return (
    <div
      className="w-full flex flex-col flex-grow overflow-auto gap-1 px-10 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {messages.length === 0 ? (
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
};

export default ChatWindowBody;
