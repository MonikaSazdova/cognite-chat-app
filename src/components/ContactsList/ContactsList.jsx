import ContactCard from "./ContactCard";
import { useUser } from "../../context/UserContext";
import { users } from "../../data";

function ContactsList() {
  const loggedUser = useUser();
  const userContactsIds = loggedUser.contacts;

  const getUserContacts = (ids) => {
    return users.filter((user) => ids.includes(user.userId));
  };

  const userContacts = getUserContacts(userContactsIds);

  return (
    <div className="flex-1 w-2/3 bg-white p-3 rounded-tl-lg border border-gray-300 overflow-x-auto">
      {userContacts.map((contact, i) => (
        <ContactCard key={i} name={contact.name} surname={contact.surname} />
      ))}
    </div>
  );
}

export default ContactsList;
