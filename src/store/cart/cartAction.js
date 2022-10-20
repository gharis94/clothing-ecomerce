import { createAction } from "../../utils/createAction"
import {SET_CART_TYPES} from './cartType'

export const setCartIsOpen=(data) =>{
    return createAction(SET_CART_TYPES.IS_OPEN,(data))
};


const addItem =(array,item)=>{
    const itemExist = array.find(({id})=>id === item.id);

    if(itemExist){
        return array.map(e=> e.id=== item.id? ({...e,quantity:e.quantity+1}):e)
    }else{
        return [...array,{...item,quantity:1}]
    }
};

const delItem =(array,item)=>{
    return array.filter(({id})=>id !== item.id)
};


const decItem =(array,item)=>{
    const filterItem = array.find(({id})=>id === item.id)

    if(filterItem.quantity ===1){
        return array.filter(({id})=> id !== item.id)
    }else{
        return array.map(e=> e.id ===item.id?({...e,quantity:e.quantity-1}):e)
    }
};



export const addToCart = (array,item)=>{
    const newCart = addItem(array,item);
    return createAction(SET_CART_TYPES.SET_CART,newCart)
}

export const removeItemFrom =(array,item)=>{
    const newCart = delItem(array,item)
    return createAction(SET_CART_TYPES.SET_CART,newCart)
}
export const decFrom =(array,item)=>{
    const newCart = decItem(array,item)
    return createAction(SET_CART_TYPES.SET_CART,newCart)
}