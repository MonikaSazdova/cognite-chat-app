import ChatWindowHeader from "./ChatWindowHeader";
import ChatWindowBody from "./ChatWindowBody";
import TypeField from "./TypeField";
import useSelectedContact from "../../hooks/useSelectedContact";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { resetNewMessages } from "../../store/actions/chatActions";

function ChatWindow() {
  const selectedContact = useSelectedContact();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetNewMessages());
  }, [selectedContact, dispatch]);

  return (
    <div className="w-2/3 bg-gray-400 flex flex-col">
      <ChatWindowHeader contact={selectedContact} />
      <ChatWindowBody />
      <TypeField />
    </div>
  );
}

export default ChatWindow;
