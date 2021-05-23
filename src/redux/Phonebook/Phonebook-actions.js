import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction('PhoneBook/fetchContactsRequest')
export const fetchContactsSuccess = createAction('PhoneBook/fetchContactsSuccess')
export const fetchContactsError = createAction('PhoneBook/fetchContactsError')

export const addContactRequest = createAction('PhoneBook/addContactRequest')
export const addContactSuccess = createAction('PhoneBook/addContactSuccess')
export const addContactError = createAction('PhoneBook/addContactError')

export const deleteContactRequest = createAction('PhoneBook/deleteContactRequest')
export const deleteContactSuccess = createAction('PhoneBook/deleteContactSuccess')
export const deleteContactError = createAction('PhoneBook/deleteContactError')

// const addContact = createAction('PhoneBook/Add',
// ({ name, number }) => ({
//     payload: {
//         id: shortid.generate(),
//         name,
//         number
//     }
// })
// )

// const deleteContact = createAction('PhoneBook/Delete')

export const filterContacts = createAction('PhoneBook/Filter')

// export default {addContactRequest, addContactSuccess, addContactError, deleteContact, filterContacts}