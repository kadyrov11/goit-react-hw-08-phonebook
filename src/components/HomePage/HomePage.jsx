import { useDispatch, useSelector } from 'react-redux';

import {getUserName, getIsAuthenticated} from '../../redux/Authorization/Auth-selectors'

import styles from './HomePage.module.css'

export default function HomePage() {
    const name = useSelector(getUserName)
    const isLoggedIn = useSelector(getIsAuthenticated)

    return (
        <div className={styles.container}>
            {isLoggedIn ? <h1> Welcome {name}!</h1> :
            <> <h1> Welcome...</h1> <p>Please authorize !</p> </>}
        </div>
    )};