import {compose,createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './rootReducer';
import {persistStore,persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const middleware = [process.env.NODE_ENV === 'development' && logger].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV === 'development' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const enhancer = composeEnhancer(applyMiddleware(...middleware))

const persistConfig ={
    key:'root',
    storage:storage,
    blacklist:['user']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = createStore(persistedReducer,undefined,enhancer)

export const persistor = persistStore(store)