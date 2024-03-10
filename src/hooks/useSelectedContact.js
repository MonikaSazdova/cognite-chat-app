import { useSelector } from "react-redux";
import { useUser } from "../context/UserContext";
import { setDefaultSelectedContact } from "../utils/utils";
import { users } from "../data";

const useSelectedContact = () => {
	const loggedUser = useUser();
	const defaultUser = setDefaultSelectedContact(loggedUser, users);
	const selectedContact = useSelector((state) => state.chat.selectedContact) || defaultUser;
	return selectedContact
}

export default useSelectedContact;