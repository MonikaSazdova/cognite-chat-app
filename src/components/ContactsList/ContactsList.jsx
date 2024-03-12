import ContactCard from "./ContactCard";
import { useDispatch } from "react-redux";
import {setSelectedContact,} from "../../store/actions/chatActions";
import useSelectedContact from "../../hooks/useSelectedContact";
import { useData } from "../../context/DataContext";
import useLoggedUser from "../../hooks/useLoggedUser";

function ContactsList() {
  const dispatch = useDispatch();
  const selectedContact = useSelectedContact();
  const loggedUser = useLoggedUser();
  const userContactsIds = loggedUser.contacts;
  const users = useData().users;

  const getUserContacts = (ids) => {
    return users.filter((user) => ids.includes(user.userId));
  };

  const userContacts = getUserContacts(userContactsIds);

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
