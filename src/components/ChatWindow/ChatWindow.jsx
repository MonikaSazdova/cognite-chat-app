import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import TypeField from "./TypeField";
import { chats } from "../../data";
import { useUser } from "../../context/UserContext";
import useSelectedContact from "../../hooks/useSelectedContact";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetNewMessages } from "../../store/actions/chatActions";

function ChatWindow() {
  const loggedUser = useUser();
  const selectedContact = useSelectedContact();
  const dispatch = useDispatch();

  const getChat = (chats, user1, user2) => {
    return chats.find(
      (chat) =>
        chat.participants.includes(user1.userId) &&
        chat.participants.includes(user2.userId)
    );
  };
  const currentChat = getChat(chats, loggedUser, selectedContact);

  useEffect(() => {
    // Reset newMessages when selectedContact changes
    dispatch(resetNewMessages());
  }, [selectedContact, dispatch]);

  return (
    <div className="w-2/3 bg-gray-400 flex flex-col">
      <ChatWindowHeader contact={selectedContact} />
      <ChatWindowBody currentChat={currentChat} />
      <TypeField />
    </div>
  );
}

export default ChatWindow;
