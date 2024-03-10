import { getTimeDescription } from "../../utils/utils";
import { useUser } from "../../context/UserContext";
import { users } from "../../data";
import { useSelector } from "react-redux";
import { setDefaultSelectedContact } from "../../utils/utils";

function MessageCard({ text, timestamp, userId }) {
  const loggedUser = useUser();
  const defaultUser = setDefaultSelectedContact(loggedUser, users);
  const selectedContact = useSelector(state => state.chat.selectedContact) || defaultUser;
  const isMessageFromContact = selectedContact.userId === userId;
  const formattedTime = getTimeDescription(timestamp);

  return (
    <div className="w-full bg-transparent">
      <div className={`${isMessageFromContact ? "justify-end" : "justify-start"} flex max-w-2/3`}>
        <div className={`rounded-lg p-3 min-w-36 ${isMessageFromContact ? "bg-blue-300" : "bg-white"}`}
          style={{boxShadow:"0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 1px rgba(0, 0, 0, 0.1)"}}
        >
          <p className="text-left">{text}</p>
          <p className="text-xs text-right mt-2">{formattedTime}</p>
        </div>
      </div>
    </div>
  );
}

export default MessageCard;
