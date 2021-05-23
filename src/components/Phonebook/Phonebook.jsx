import styles from './Phonebook.module.css';

const Phonebook = ({ children }) => (
    <div className={styles.bg}>
    <div className={styles.container}>
        {children}
    </div>
    </div>
);

export default Phonebook;