import ContactCard from "./ContactCard";
import { useEffect } from "react";
import { useUser } from "../../context/UserContext";
import { users } from "../../data";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedContact,
  setContacts,
} from "../../store/actions/chatActions";
import useSelectedContact from "../../hooks/useSelectedContact";

function ContactsList() {
  const dispatch = useDispatch();
  const loggedUser = useUser();
  const userContacts = useSelector((state) => state.chat.contacts);
  const selectedContact = useSelectedContact();

  useEffect(() => {
    const userContactsIds = loggedUser.contacts;
    const contacts = getUserContacts(userContactsIds);
    dispatch(setContacts(contacts));
  }, [loggedUser, dispatch]);


  const getUserContacts = (ids) => {
    return users.filter((user) => ids.includes(user.userId));
  };

  const onCardClick = (contact) => () => {
    dispatch(setSelectedContact(contact));
  };

  return (
    <div className="flex-1 w-2/3 bg-white p-3 rounded-tl-lg border border-gray-300 overflow-x-auto">
      {userContacts.map((contact, i) => {
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
