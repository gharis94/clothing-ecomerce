import {SET_PRODUCT} from './productType'

const INITIAL_STATE={
    categories:{}
};








export const productReducer=(state=INITIAL_STATE,action={})=>{
    const {type,payload} = action;
    console.log(type)
    switch(type){
        case SET_PRODUCT.SET_CATEGORIES:
            return{
                ...state,
                categories:payload
            }
        default:
            return state
    }
}