import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';

import operations from '../../redux/Phonebook/Phonebook-operations';
import phonebookSelectors from '../../redux/Phonebook/Phonebook-selectors';
import styles from './Form.module.css'

export default function Form() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [number, setNumber] = useState('')

    const contacts = useSelector(phonebookSelectors.getContactList)

    const reset = () => {
        setName('')
        setNumber('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const alreadyInContacts = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())

        alreadyInContacts ?
          alert(`${name} is already in contacts`) : dispatch(operations.addContact({name,number}))
        
        reset()
    }

    const handleChange = ({ target }) => {
        const {name, value} = target

        switch (name) {
            case 'name':setName(value)
             break

            case 'number': setNumber(value)
             break
            default: console.warn(`Поле для ввода с name: "${name}" не обрабатывается! `)
             break
        }
    }

    return (
    <>
        <form id="form" onSubmit={handleSubmit}>    
            <label htmlFor="name" className={styles.label} required>Name</label>
                <input pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleChange} value={name} name="name" type="text" id="name" className={styles.input} required />
            <label htmlFor="number" className={styles.label}>Number</label>
                <input
                        value={number}
                        name="number"
                        onChange={handleChange}
                        className={styles.input}
                        type="tel"
                        name="number"
                        id="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
            <button className={styles.btn}>Add contact</button>
        </form>  
    </>
    )

};

// class Form extends Component {
//     state = {
//         name: '', 
//         number: ''
//     }
    
//     handleChange = ({ target }) => {
//         const {name, value} = target

//         this.setState({
//             [name]: value,
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         const { onSubmit, contacts } = this.props
//         const { name } = this.state
//         const alreadyInContacts = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
//         alreadyInContacts ? alert(`${name} is already in contacts`) : onSubmit(this.state)  
//         this.reset()
//     }
//     reset = () => {
//         this.setState({
//             name: '',
//             number: ''
//         })
//     }

//     render() {
//         const {handleSubmit, handleChange} = this
//         return (
//             <>
//             <form id="form" onSubmit={handleSubmit}>    
//                 <label htmlFor="name" className={styles.label} required>Name</label>
//                     <input pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//                         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//                         onChange={handleChange} value={this.state.name} name="name" type="text" id="name" className={styles.input} required />
//                 <label htmlFor="number" className={styles.label}>Number</label>
//                     <input
//                          value={this.state.number}
//                          name="number"
//                          onChange={handleChange}
//                          className={styles.input}
//                          type="tel"
//                          name="number"
//                          id="number"
//                          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//                          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//                          required
//                         />
//                 <button className={styles.btn}>Add contact</button>
//             </form>  
//             </>
//         )
//     }
// }
 
// const mapStateToProps = (state) => ({
//     contacts: phonebookSelectors.getContactList(state)
// })

// const mapDispatchToProps = dispatch => ({
//     onSubmit: state => dispatch(operations.addContact(state))
// })

// export default connect(mapStateToProps,mapDispatchToProps)(Form);