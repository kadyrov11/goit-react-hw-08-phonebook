import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authOperations from '../../redux/Authorization/Auth-operations';

import styles from './LoginForm.module.css'
 
export default function LoginForm() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target }) => {
        const { name, value } = target

        switch (name) {
            case 'email': setEmail(value)
             break
            case 'password': setPassword(value)
             break
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        
        dispatch(authOperations.logIn({email, password}))
        
        // resetState()
    }
    const resetState = () => {
        setEmail('')
        setPassword('')
    }
    
    return (
    <div className={styles.bg}>
    <div className={styles.container}>
        <h1 className={styles.heading}>LogInPage</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor='email'>E-mail</label>
            <input type="email" name='email' value={email} onChange={handleChange} className={styles.input} id='email' />
        <label className={styles.label} htmlFor='password' >Password</label>
            <input type="password" name='password' id='password' value={password} onChange={handleChange} className={styles.input}/>
        <button type='submit' className={styles.btn}>Log in</button>
         </form>
        <NavLink to='/register' className={styles.link}>Sign Up</NavLink>
    </div>
    </div>
    )
}