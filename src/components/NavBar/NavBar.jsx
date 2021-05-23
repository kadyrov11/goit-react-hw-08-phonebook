import AppBar from './AppBar'
import AuthNav from './AuthNav'

import styles from './NavBar.module.css'

const NavBar = () => (
    <header className={styles.navigation}>
        <AppBar />
        <AuthNav/>
    </header>
);
export default NavBar;