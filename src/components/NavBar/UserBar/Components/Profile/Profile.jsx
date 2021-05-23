import img from '../../image/face-placeholder.png'

import { useSelector } from 'react-redux';

import {getUserName, getUserEmail} from '../../../../../redux/Authorization/Auth-selectors'

import styles from './Profile.module.css'

export default function Profile() {
    const name = useSelector(getUserName)
    const email = useSelector(getUserEmail)

    return (
        <div className={styles.container}>
            <h1>Profile</h1>
            <img src={img} className={styles.image} />
            <h2 className={styles.userName} >{name}</h2>
            <p className={styles.userEmail}>{email}</p>
        </div>
    )
}