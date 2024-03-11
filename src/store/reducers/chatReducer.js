import { chats as defaultChats} from "../../data";
import { SET_SELECTED_CONTACT, SET_CONTACTS, ADD_MESSAGE_TO_CHAT } from "../actions/chatActions";

const initialState = {
	selectedContact: null,
	contacts: [],
	chats: defaultChats
}

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_CONTACT:
			return { ...state, selectedContact: action.payload }
		case SET_CONTACTS:
			return { ...state, contacts: action.payload }
			case ADD_MESSAGE_TO_CHAT:
				return {
					...state,
					chats: state.chats.map(chat =>
						chat.chatId === action.payload.chatId
							? { ...chat, messages: [...chat.messages, action.payload.message] }
							: chat
					),
				};
		default:
			return state;
	}
}

export default chatReducer;