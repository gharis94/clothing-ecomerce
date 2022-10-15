import { createAction } from "../../utils/createAction"
import {SET_PRODUCT} from './productType'

export const setCategories =(data)=>{
   return createAction(SET_PRODUCT.SET_CATEGORIES,data)
}