import styles from './ContactListItem.module.css'

const ContactListitem = ({ name, onDelete, number }) =>
        <li className={styles.contact}>
            <p className={styles.text}>{name}: {number}</p><button className={styles.deleteBtn} onClick={onDelete}>delete</button>
        </li>


export default ContactListitem;