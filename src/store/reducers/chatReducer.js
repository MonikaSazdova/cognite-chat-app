import { SET_SELECTED_CONTACT, SET_CONTACTS, SET_NEW_MESSAGES, RESET_NEW_MESSAGES } from "../actions/chatActions";

const initialState = {
	selectedContact: null,
	contacts: [],
	newMessages: []
}

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_CONTACT:
			return { ...state, selectedContact: action.payload }
		case SET_CONTACTS:
			return { ...state, contacts: action.payload }
		case SET_NEW_MESSAGES:
			return { ...state, newMessages: [...state.newMessages, action.payload] };
		case RESET_NEW_MESSAGES:
				return { ...state, newMessages: [] };
		default:
			return state;
	}
}

export default chatReducer;