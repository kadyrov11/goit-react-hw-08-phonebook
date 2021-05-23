import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER

} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import logger from 'redux-logger'

import PhonebookReducer from './Phonebook/Phonebook-reducer'
import AuthReducer from './Authorization/Auth-reducer'

const persistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const rootReducer = combineReducers({
    phonebook: PhonebookReducer,
    auth: persistReducer(persistConfig, AuthReducer)
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [ FLUSH,REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    }),
    logger
]


const store = configureStore({
    reducer: rootReducer,
    middleware,
    devtools: process.env.NODE_ENV === "development"
})

const persistor = persistStore(store)
 
export default {store, persistor}