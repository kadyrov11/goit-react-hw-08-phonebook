import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import img from '../../image/face-placeholder.png'
import { getUserEmail } from '../../../../../redux/Authorization/Auth-selectors'

import styles from './User.module.css'

export default function User() {
    const email = useSelector(getUserEmail)
    return (
        <NavLink to='/profile' className={styles.link}>
            <img src={img} alt="" className={styles.img} />
            <h2 className={styles.email}>{email}</h2>
        </NavLink>
    )
}