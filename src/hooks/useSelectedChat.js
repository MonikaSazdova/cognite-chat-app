import useLoggedUser from "./useLoggedUser";
import { useData } from "../context/DataContext";

const useSelectedChat = (selectedContact) => {
	const loggedUser = useLoggedUser();
	const chats = useData().chats;
	return chats.find(
		(chat) =>
			chat.participants.includes(loggedUser.userId) &&
			chat.participants.includes(selectedContact.userId)
	);
};

export default useSelectedChat;
