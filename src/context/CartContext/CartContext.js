import React,{createContext, useEffect, useReducer, useState} from "react";


const inititialState = {
    isCartOpen:false,
    setIsCardOpen:()=>{},
    cartItems:[],
    setCartItems:()=>[],
    cartCount:0,
    cartTotal:0
};

const addItemto=(arr,item)=>{
    const exist = arr.find(({id})=>id === item.id)
    
    if(exist){
       return arr.map(a=>a.id === item.id?({...a,quantity:a.quantity+1}):a)
    }
    else{
        arr = [...arr,{...item,quantity:1}]
        return arr;
    }
};

const removeItemFrom =(arr,item)=>{
    const exist = arr.find(x=>x.id === item.id);
    
    
    if(exist && exist.quantity>1){
        const y= arr.map(x=>x.id===item.id?({...x,quantity:x.quantity-1}):x)
        return y
    }else{
        return arr.filter(x=> x.id !== item.id)
    }
};
const delItem=(arr,item)=>{
    return arr.filter(x=> x.id!==item.id)
};

export const CartContext = createContext(inititialState);

const cartReducer=(state,action)=>{
    const {type,payload} = action;
    switch(type){
        case 'ADD':
            return{
                ...state,
                ...payload
            }
        case 'BOO':
            return{
                ...state,
                isCartOpen:payload
            }
        default:
            return state
    }
}

export const CartProvider =({children})=>{
    //const [isCartOpen,setIsCartOpen] = useState(false);
    //const [cartItems,setCartItems] = useState([]);
    //const [cartCount,setCartCount] = useState(0)
    const [{cartItems,cartCount,cartTotal,isCartOpen},dispatch] = useReducer(cartReducer,inititialState)
    
    const addItem=(item)=>{
        const x = addItemto(cartItems,item)
        newCartItems(x);
    }
    const decrement =(item)=>{
        const x=removeItemFrom(cartItems,item)
        newCartItems(x)        
    }
    const delFromCart =(item)=>{
        const x=delItem(cartItems,item)
        newCartItems(x)
    }
    const newCartItems=(x)=>{
        const cartCount = x.reduce((acc, {
            quantity
        }) => (acc += quantity), 0)

        const cartTotal = x.reduce((acc,item)=>{
            let val = item.quantity*item.price;
            acc += val;
            return acc;
        },0)

        dispatch({type:'ADD',payload:{
            cartItems:x,
            cartCount:cartCount,
            total:cartTotal
        }})
    }
    const setIsCartOpen=(bool)=>{
        dispatch({type:'BO',payload:bool})
    }
    return(
        <CartContext.Provider value={{
            isCartOpen,
            setIsCartOpen,
            addItem,
            cartCount,
            cartItems,
            decrement,
            delFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}