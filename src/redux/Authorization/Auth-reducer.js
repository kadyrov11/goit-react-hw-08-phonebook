import { combineReducers } from 'redux'
import {createAction, createReducer} from "@reduxjs/toolkit"

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

const userInitialState = {
    name: '',
    email: '',
}

const user = createReducer(userInitialState, {
    [logInSuccess]: (_, {payload}) => payload.user ,
    [signUpSuccess]: (_, { payload }) => payload.user,
    [logOutSuccess]: () => userInitialState,
    [getCurrentUserSuccess]: (_,{payload}) => payload
})

const token = createReducer(null, {
    [logInSuccess]: (_, {payload}) => payload.token,
    [signUpSuccess]: (_, {payload}) => payload.token,
    [logOutSuccess]: () => null,

})

const error = createReducer(null, {
    [signUpError]: (_, {payload}) => payload,
    [logOutError]: (_, { payload }) => payload,
    [logInError]: (_, { payload }) => payload,
    [getCurrentUserError]: (_, { payload }) => payload,
    [getCurrentUserError]: () => null,
    [signUpSuccess]: () => null,
    [logOutSuccess]: () => null,
    [logInSuccess]: () => null,
})

const loading = createReducer(false, {
    [logInRequest]: () => true,
    [logInSuccess]: () => false,
    [logInError]: () => false,
    [signUpRequest]: () => true,
    [signUpSuccess]: () => false,
    [signUpError]: () => false,
    [logOutRequest]: () => true,
    [logOutSuccess]: () => false,
    [logOutError]: () => false,
    [getCurrentUserRequest]: () => true,
    [getCurrentUserSuccess]: () => false,
    [getCurrentUserError]: () => false,
})

const isAuthenticated = createReducer(false, {
    [logInSuccess]: () => true,
    [signUpSuccess]: () => true,
    [signUpError]: () => false,
    [logInError]: () => false,
    [logOutSuccess]: () => false,
    [getCurrentUserSuccess]: () => true,

})

export default combineReducers({
    user,
    loading,
    isAuthenticated,
    token,
    error
})