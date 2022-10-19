import { createAction } from "../../utils/createAction"
import {SET_PRODUCT} from './productType'
import {getCategoriesAndDocuments} from '../../utils/firebase'



export const fetchCategoriesStart=()=>{
   return createAction(SET_PRODUCT.SET_CATEGORIES_START)
}
export const fetchCategoriesSuccess=(data)=>{
   return createAction(SET_PRODUCT.SET_CATEGORIES_SUCCESS,data)
}
export const fetchCategoriesError=(error)=>{
   return createAction(SET_PRODUCT.SET_CATEGORIES_ERROR,error)
}

export const fetchCategoriesAsync = () => async (dispatch) => {
   dispatch(fetchCategoriesStart())
   try{
      const rsp = await getCategoriesAndDocuments()
      dispatch(fetchCategoriesSuccess(rsp))
   }catch(error){
      dispatch(fetchCategoriesError(error))
   }
}