import { combineReducers } from 'redux'
import {createReducer} from "@reduxjs/toolkit"

import {
    filterContacts,
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError
} from './Phonebook-actions'


const contacts = createReducer([], {
    [addContactSuccess]: (state, {payload}) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) => {
        const newList = [...state].filter((contact) =>  contact.id !== payload)
        return newList
    },
    [fetchContactsSuccess]: (_,{payload}) => payload,
})

const filter = createReducer('', {
    [filterContacts]: (_,{payload}) => payload })

const loading = createReducer(false, {
    [addContactRequest]: () => true,
    [addContactSuccess]: () => false,
    [addContactError]: () => false,
    [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
    [deleteContactError]: () => false,
    [fetchContactsRequest]: () => true,
    [fetchContactsSuccess]: () => false,
    [fetchContactsError]: () => false,
})
// const contacts = (state = [], { type, payload }) => {
    
//     switch (type) {
//         case [addContact.type]:
//             console.log(payload);
//          return [...state, payload]
//         case [deleteContact.type]:
//             const newList = [...state]
//             newList.splice(payload,1)
//          return newList
        
//        default: return state
//     }
// }
// const filter1 = (state = '', { type, payload }) => {
//     switch (type) {
//         case [filterContacts.type]:
//          return payload
        
//        default: return state
//     }
// }

export default combineReducers({
    contacts,
    filter,
    loading
})