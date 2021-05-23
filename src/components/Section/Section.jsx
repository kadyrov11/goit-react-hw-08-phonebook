import styles from './Section.module.css'

const Section = ({ title, children }) => (
    <>
        <h2 className={styles.heading}>{title}</h2>
        <div className={styles.container}>{children}</div>
    </>
);

export default Section;