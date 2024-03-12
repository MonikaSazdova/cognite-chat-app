import { useSelector } from "react-redux";
import { setDefaultSelectedContact } from "../utils/utils";
import { useData } from "../context/DataContext";
import useLoggedUser from "./useLoggedUser";

const useSelectedContact = () => {
	const loggedUser = useLoggedUser();
	const users = useData().users;
	const defaultUser = setDefaultSelectedContact(loggedUser, users);
	const selectedContact = useSelector((state) => state.chat.selectedContact) || defaultUser;
	return selectedContact
}

export default useSelectedContact;