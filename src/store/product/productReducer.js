import {SET_PRODUCT} from './productType'

const INITIAL_STATE={
    categories:[],
    isLoading:false,
    Error:null
};



export const productReducer=(state=INITIAL_STATE,action={})=>{
    const {type,payload} = action;
    console.log(payload)
    switch(type){
        case SET_PRODUCT.SET_CATEGORIES_START:
            return{
                ...state,
                isLoading:true
            }
        case SET_PRODUCT.SET_CATEGORIES_SUCCESS:
            return{
                ...state,
                categories:payload,
                isLoading:false
            }
        case SET_PRODUCT.SET_CATEGORIES_ERROR:
            return{
                ...state,
                Error:payload,
                isLoading:false
            }
        default:
            return state
    }
}