import {useState} from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import authOperations from '../../redux/Authorization/Auth-operations';

import styles from './RegisterForm.module.css'

export default function RegisterForm() {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = ({ target }) => {
        const { name, value } = target

        switch (name) {
         case 'name': setName(value)
          break
         case 'email': setEmail(value)
          break
         case 'password': setPassword(value)
          break
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(authOperations.signUp({name, email, password}))
        
        resetState()
    }
    const resetState = () => {
        setName('')
        setEmail('')
        setPassword('')
    }

    return (
    <div className={styles.bg}>
    <div className={styles.container}>
    <h1 className={styles.heading}>SignUpPage</h1>
    <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor='name'>Name</label>
            <input type="text" name='name' value={name} onChange={handleChange} className={styles.input} id='name' />
        <label className={styles.label} htmlFor='email'>E-mail</label>
            <input type="email" name='email' value={email} onChange={handleChange} className={styles.input} id='password' />
        <label className={styles.label} htmlFor='password'>Password</label>
            <input type="password" name='password' value={password} onChange={handleChange} className={styles.input} id='password' />
        <button type='submit' className={styles.btn}>Sign Up</button>
    </form>
    <NavLink to='/login'>Log in</NavLink>
    </div>
    </div>
    )
}