import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactListItem from '../ContactListItem'
import operations from '../../redux/Phonebook/Phonebook-operations';
import phonebookSelectors from '../../redux/Phonebook/Phonebook-selectors';


import styles from './ContactList.module.css'

const getFilteredContacts = (contacts, filter) => {
 const FILTER = filter.toLowerCase()
 const filteredContacts = contacts.filter(({ name, number }) => name.toLowerCase().includes(FILTER) || number.includes(FILTER))
    return filteredContacts
}

export default function ContactList() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(operations.getContacts())
    }, [])

    const handleDelete = (id) => {
        dispatch(operations.deleteContact(id))
    }


    const contacts = useSelector(phonebookSelectors.getContactList)
    const filter = useSelector(phonebookSelectors.getFilter)
    const filteredContacts = getFilteredContacts(contacts, filter)

    const newContacts = [...filteredContacts].map(({ id, name, number }) =>
        <ContactListItem key={id} name={name} number={number} onDelete={() => handleDelete(id)} />)

    return (
        <>
            {filteredContacts.length ? <ul className={styles.list}>{newContacts}</ul> :
            <p style={{
              fontSize: '25px',
              textAlign: 'center',
              color:'orange',}}>
            There is no contact
            </p>}
        </>
    )
}