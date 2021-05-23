import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import User from '../UserBar/Components/User'
import { getIsAuthenticated } from '../../../redux/Authorization/Auth-selectors'
import authOperations from '../../../redux/Authorization/Auth-operations'           

import styles from './AuthNav.module.css'


export default function AuthNav() {
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(authOperations.logOut())
    }
        
    const isLoggedIn = useSelector(getIsAuthenticated)

    return (
        <div className={styles.authBar}>
            {isLoggedIn ?
                <><User /><button type='button' className={styles.btn} onClick={onLogout}>LogOut</button>  </> :
                <><NavLink to='/register' className={styles.link} >SignUp</NavLink> <NavLink to='/login' className={styles.link} >Login</NavLink></>
            }
        </div>
    )
}

// const mapDispatchToProps = dispatch => ({
//     onLogout: () => dispatch(authOperations.logOut())
// })можно и так
/*const mapDispatchToProps = {
    onLogout: authOperations.logOut 
})*/
