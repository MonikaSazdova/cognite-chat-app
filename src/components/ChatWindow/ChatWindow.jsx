import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import TypeField from "./TypeField";
import { useSelector } from "react-redux";
import { chats, users } from "../../data";
import { useUser } from "../../context/UserContext";
import { setDefaultSelectedContact } from "../../utils/utils";

function ChatWindow() {
  const loggedUser = useUser();
  const defaultUser = setDefaultSelectedContact(loggedUser, users);
  const selectedContact = useSelector((state) => state.chat.selectedContact) || defaultUser;

  const getChat = (chats, user1, user2) => {
    return chats.find(
      (chat) =>
        chat.participants.includes(user1.userId) &&
        chat.participants.includes(user2.userId)
    );
  };
  const currentChat = getChat(chats, loggedUser, selectedContact);

  return (
    <div className="w-2/3 bg-gray-400 flex flex-col">
      <ChatWindowHeader
        contact={selectedContact}
      />
      <ChatWindowBody currentChat={currentChat} />
      <TypeField />
    </div>
  );
}

export default ChatWindow;
