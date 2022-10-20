import { createAction } from "../../utils/createAction";
import { USER_ACTION_TYPES } from "./userType";


export const setCurrentUser =(user)=>(
    createAction(USER_ACTION_TYPES.SET_USER,user)
)