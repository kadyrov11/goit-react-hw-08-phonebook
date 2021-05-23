import axios from 'axios'

import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsError,
} from './Phonebook-actions'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const getContacts = () => async dispatch => {
    dispatch(fetchContactsRequest())
    try {
        const { data } = await axios.get('/contacts')
        dispatch(fetchContactsSuccess(data))
    }
    catch (error) {
                dispatch(fetchContactsError(error))
    }
}


const addContact = (contact) => async dispatch => {
    dispatch(addContactRequest())
    try {
        const { data } = await axios.post('/contacts', contact)
        dispatch(addContactSuccess(data))
    }
    catch (error) {
        dispatch(addContactError(error))
    } 
}


const deleteContact = (contactId) => async dispatch => {
        dispatch(deleteContactRequest())
    try {
        await axios.delete(`/contacts/${contactId}`)
        dispatch(deleteContactSuccess(contactId))
    }
    catch (error) {
        dispatch(deleteContactError(error))
    } 
}

export default { addContact, deleteContact, getContacts }