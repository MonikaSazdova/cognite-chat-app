export const SET_SELECTED_CONTACT = "SET_SELECTED_CONTACT";
export const ADD_MESSAGE_TO_CHAT = "ADD_MESSAGE_TO_CHAT";
export const SET_DEFAULT_CHATS = "SET_DEFAULT_CHATS"

export const setSelectedContact = contact => ({type: SET_SELECTED_CONTACT,payload: contact});
export const addMessageToChat = (chatId, message) => ({ type: ADD_MESSAGE_TO_CHAT, payload: { chatId, message } });
export const setDefaultChats = chats => ({ type: SET_DEFAULT_CHATS, payload: chats })