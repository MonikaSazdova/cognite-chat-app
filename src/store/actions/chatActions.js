export const SET_SELECTED_CONTACT = 'SET_SELECTED_CONTACT';
export const SET_CONTACTS = 'SET_CONTACTS';
export const SET_NEW_MESSAGES = 'SET_NEW_MESSAGES';
export const RESET_NEW_MESSAGES = 'RESET_NEW_MESSAGES';
export const SET_CURRENT_CHAT = 'SET_CURRENT_CHAT';



export const setSelectedContact = contact => ({ type: SET_SELECTED_CONTACT, payload: contact });
export const setContacts = contacts => ({ type: SET_CONTACTS, payload: contacts });
export const setNewMessages = messages => ({ type: SET_NEW_MESSAGES, payload: messages });
export const resetNewMessages = () => ({ type: RESET_NEW_MESSAGES });
export const setCurrentChat = currentChat => ({ type: SET_CURRENT_CHAT, payload: currentChat });

