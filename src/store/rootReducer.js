import {combineReducers} from 'redux'
import { userReducer } from './user/userReducer'
import { productReducer } from './product/productReducer'
import {cartReducer} from './cart/cartReducer'

export const rootReducer = combineReducers({
    user: userReducer,
    categories:productReducer,
    cart:cartReducer
})