import { SET_SELECTED_CONTACT } from "../actions/chatActions";
import { SET_CONTACTS } from "../actions/chatActions";

const initialState = {
	selectedContact: null,
	contacts: []
}

const chatReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_SELECTED_CONTACT:
			return { ...state, selectedContact: action.payload }
		case SET_CONTACTS:
				return {...state, contacts: action.payload }
		default:
			return state;
	}
}

export default chatReducer;