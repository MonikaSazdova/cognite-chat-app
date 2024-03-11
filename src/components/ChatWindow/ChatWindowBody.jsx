import MessageCard from "./MessageCard";
import backgroundImg from "../../assets/chat_background.png";
import { useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import useSelectedContact from "../../hooks/useSelectedContact";

function ChatWindowBody() {
  const selectedContact = useSelectedContact();
  const [messages, setMessages] = useState([]);
  const windowBottom = useRef(null);
  const chats = useSelector(state => state.chat.chats);

  useEffect(() => {
    const selectedChat = chats.find(chat => chat.participants.includes(selectedContact?.userId));
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [chats, selectedContact]);


  useEffect(() => {
    windowBottom.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div
      className="w-full flex flex-col flex-grow overflow-auto gap-1 px-10 py-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {messages.length === 0 && messages.length === 0 ? (
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
