export const SET_SELECTED_CONTACT = 'SET_SELECTED_CONTACT';
export const SET_CONTACTS = 'SET_CONTACTS'


export const setSelectedContact = contact => ({ type: SET_SELECTED_CONTACT, payload: contact })
export const setContacts = contacts => ({type: SET_CONTACTS, payload: contacts})
