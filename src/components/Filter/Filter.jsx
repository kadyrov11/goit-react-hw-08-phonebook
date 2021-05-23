import { useDispatch, useSelector } from 'react-redux';

import { filterContacts } from '../../redux/Phonebook/Phonebook-actions';
import phonebookSelectors from '../../redux/Phonebook/Phonebook-selectors';

import styles from './Filter.module.css'

export default function Filter() {
    const dispatch = useDispatch()

    const handleChange = ({ target }) => dispatch(filterContacts(target.value));
    const value = useSelector(phonebookSelectors.getFilter)

    return (
        <>
            <label htmlFor='filter' className={styles.title}>Find contact by name or number :</label>
            <input type="text" id='filter' value={value} onChange={handleChange} className={styles.input} />
        </> 
    )
}

// const Filter = ({ value, change }) => {
//     const ID = shortid.generate()

//     return (
//         <>
//             <label htmlFor={ID} className={styles.title}>Find contact by name or number :</label>
//             <input type="text" id={ID} value={value} onChange={change} className={styles.input} />
//         </>
//     )
// };

// const mapStateToProps = (state) => ({
//     value: phonebookSelectors.getFilter(state)
// })

// const mapDispatchToProps = dispatch => ({
//     change: ({ target }) => dispatch(filterContacts(target.value))
// })


// export default connect(mapStateToProps, mapDispatchToProps)(Filter);