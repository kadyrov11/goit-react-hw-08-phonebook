import axios from 'axios'

import {
    logInRequest,
    logInSuccess,
    logInError,
    signUpRequest,
    signUpSuccess,
    signUpError,
    logOutRequest,
    logOutSuccess,
    logOutError,
    getCurrentUserRequest,
    getCurrentUserSuccess,
    getCurrentUserError
} from './Auth-actions'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }
}

const signUp = (user) => async dispatch => {
    dispatch(signUpRequest())

    try {
        const { data } = await axios.post('/users/signup', user)
        token.set(data.token)
        dispatch(signUpSuccess(data))
    } 
    catch (error) {
        dispatch(signUpError(error.message))
    }
}


const logIn = (user) => async dispatch => {
    dispatch(logInRequest())
    try {
        const { data } = await axios.post('/users/login', user)
        token.set(data.token)
        dispatch(logInSuccess(data))
    }
    catch (error) {
        dispatch(logInError(error.message))
    }
}

const logOut = () => async dispatch => {
    dispatch(logOutRequest())
    try {
        await axios.post('/users/logout')
        token.unset()
        dispatch(logOutSuccess())
    }
    catch (error) {
        dispatch(logOutError(error.message))
    }
}

const getCurrentUser = () => async (dispatch, getState) =>  {
    const { auth: { token: persistedToken } } = getState()
    
    if (!persistedToken) { return }
    
    token.set(persistedToken)

    dispatch(getCurrentUserRequest())

    try {
        const { data } = await axios.get('/users/current')
        dispatch(getCurrentUserSuccess(data))
    }
    catch (error) {
        dispatch(getCurrentUserError(error.message))
    }
}

export default {logIn, signUp, logOut, getCurrentUser}