import {useEffect} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';

import Section from './components/Section'
import Form from './components/Form'
import ContactList from './components/ContactList';
import Filter from './components/Filter'
import Phonebook from './components/Phonebook'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import HomePage from './components/HomePage'
import Profile from './components/NavBar/UserBar/Components/Profile'

import { getIsAuthenticated } from './redux/Authorization/Auth-selectors'
import authOps from './redux/Authorization/Auth-operations'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authOps.getCurrentUser())
  }, [])

  const isLoggedIn = useSelector(getIsAuthenticated)

  return (
  <>  
    <NavBar />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/contacts' exact>
      {!isLoggedIn ? <Redirect to='/login' /> :
      <Phonebook>
          <Section title="PhoneBook">
            <Form/>
          </Section>
            <Section title="Contacts">
              <Filter/>
              <ContactList/>
          </Section>
        </Phonebook>}
      </Route>
      <Route path='/login'>
        {isLoggedIn ? <Redirect to='/contacts' /> :
          <LoginForm/>
        }
      </Route>
      <Route path='/register'>
        {isLoggedIn ? <Redirect to='/contacts' /> :
          <RegisterForm/>
        }
          </Route>
      <Route path='/profile'>
        {isLoggedIn ? <Profile/> : <Redirect to='/login' />}
      </Route>
    </Switch>
  </>)
};