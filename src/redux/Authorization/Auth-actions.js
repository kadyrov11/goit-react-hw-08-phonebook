import { createAction } from "@reduxjs/toolkit"

export const signUpRequest = createAction('PhoneBook/signUpRequest')
export const signUpSuccess = createAction('PhoneBook/signUpSuccess')
export const signUpError = createAction('PhoneBook/signUpError')

export const logInRequest = createAction('PhoneBook/logInRequest')
export const logInSuccess = createAction('PhoneBook/logInSuccess')
export const logInError = createAction('PhoneBook/logInError')

export const logOutRequest = createAction('PhoneBook/logOutRequest')
export const logOutSuccess = createAction('PhoneBook/logOutSuccess')
export const logOutError = createAction('PhoneBook/logOutError')

export const getCurrentUserRequest = createAction('PhoneBook/getCurrentUserRequest')
export const getCurrentUserSuccess = createAction('PhoneBook/getCurrentUserSuccess')
export const getCurrentUserError = createAction('PhoneBook/getCurrentUserError')