import {SET_CART_TYPES} from './cartType'
const INITIAL_STATE={
    isOpen:false,
    cartItems:[],
};



export const cartReducer =(state=INITIAL_STATE,action={})=>{
    const {type,payload} = action;
    switch(type){
        case SET_CART_TYPES.SET_CART:
            return{
                ...state,
                cartItems:payload
            }
        case SET_CART_TYPES.IS_OPEN:
            return{
                ...state,
                isOpen:payload
            }
        default:
            return state;
    }
}