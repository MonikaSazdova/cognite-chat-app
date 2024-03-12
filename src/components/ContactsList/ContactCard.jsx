import InitialsAvatar from "../User/InitialsAvatar";
import { getTimeDescription } from "../../utils/utils";
import { useSelector } from "react-redux";

function ContactCard({ contact, onClick, isSelected }) {
  const chats = useSelector((state) => state.chat.chats);
  const selectedChat = chats.find((chat) =>
    chat.participants.includes(contact?.userId)
  );
  const lastMessage = getLastMessage(selectedChat);

  function getLastMessage(chat) {
    if (chat && chat.messages.length > 0) {
      return chat.messages[chat.messages.length - 1];
    }
    return null;
  }

  return (
    <div
      className={`p-3 flex flex-wrap items-center gap-2 mb-1 rounded-lg cursor-pointer border border-gray-200  active:bg-slate-300 ${
        isSelected
          ? "bg-slate-300 hover:bg-slate-300"
          : "bg-slate-100 hover:bg-slate-200"
      }`}
      onClick={onClick}
    >
      <InitialsAvatar user={contact} isHeader={false} />
      <div className="flex-1 min-w-0">
        <div className="font-semibold truncate flex gap-1">
          <span>{contact.name}</span>
          <span className="hidden sm:flex">{contact.surname}</span>
        </div>
        <div className="text-sm truncate">
          {lastMessage ? lastMessage.text : ""}
        </div>
      </div>
      <div className="whitespace-nowrap self-end text-xs">
        {lastMessage ? getTimeDescription(lastMessage.timestamp) : ""}
      </div>
    </div>
  );
}

export default ContactCard;
