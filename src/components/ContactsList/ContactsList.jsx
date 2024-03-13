import { useDispatch, useSelector } from "react-redux";
import ContactCard from "./ContactCard";
import { setSelectedContact } from "../../store/actions/chatActions";
import { useData } from "../../context/DataContext";
import useSelectedContact from "../../hooks/useSelectedContact";
import useLoggedUser from "../../hooks/useLoggedUser";
import { sortUsersByMostRecentMessage, getContactsOfUser } from "../../utils/utils";


function ContactsList() {
  const dispatch = useDispatch();
  const selectedContact = useSelectedContact();
  const loggedUser = useLoggedUser();
  const users = useData().users;
  const chats = useSelector(state => state.chat.chats);
  const userContactsIds = loggedUser.contacts;
  const userContacts = getContactsOfUser(userContactsIds, users);
  const sortedUsers = sortUsersByMostRecentMessage(userContacts, chats, loggedUser);

  const onCardClick = (contact) => () => {
    dispatch(setSelectedContact(contact));
  };

  return (
    <div className="flex-1 w-2/3 bg-white p-3 rounded-tl-lg border border-gray-300 overflow-x-auto">
      {sortedUsers.map((contact, i) => {
        return (
          <ContactCard
            key={i}
            contact={contact}
            onClick={onCardClick(contact)}
            isSelected={contact.userId === selectedContact.userId}
          />
        );
      })}
    </div>
  );
}

export default ContactsList;
