import { chats } from "../data";
import { useUser } from "../context/UserContext";

const useSelectedChat = (selectedContact) => {
	const loggedUser = useUser();
	return chats.find(
		(chat) =>
			chat.participants.includes(loggedUser.userId) &&
			chat.participants.includes(selectedContact.userId)
	);
};

export default useSelectedChat;
