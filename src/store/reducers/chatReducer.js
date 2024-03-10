import { SET_SELECTED_CONTACT, SET_CONTACTS, SET_NEW_MESSAGE } from "../actions/chatActions";

const initialState = {
	selectedContact: null,
	contacts: [],
	newMessage: null
}

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_CONTACT:
			return { ...state, selectedContact: action.payload }
		case SET_CONTACTS:
			return { ...state, contacts: action.payload }
		case SET_NEW_MESSAGE:
			return {...state, sentMessage: action.payload}
		default:
			return state;
	}
}

export default chatReducer;