import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';

import {getIsAuthenticated} from '../../../redux/Authorization/Auth-selectors'

import styles from './AppBar.module.css'

export default function AppBar() {
    const isLoggedIn = useSelector(getIsAuthenticated)
    return (
        <div className={styles.appBar}>
            <NavLink to='/' className={styles.link}>Home</NavLink>
            {isLoggedIn &&
                <NavLink to='/contacts' className={styles.link}>My contacts</NavLink>
            }
        </div>
    )
}