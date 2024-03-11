import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import TypeField from "./TypeField";
import useSelectedContact from "../../hooks/useSelectedContact";

function ChatWindow() {
  const selectedContact = useSelectedContact();
  return (
    <div className="w-2/3 bg-gray-400 flex flex-col">
      <ChatWindowHeader contact={selectedContact} />
      <ChatWindowBody />
      <TypeField />
    </div>
  );
}

export default ChatWindow;
