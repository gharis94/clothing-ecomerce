import React,{createContext,useEffect,useState} from 'react';
import {onAuthStateChangedListner} from '../../utils/firebase'

export const UserContext = createContext({
    currentUser:null,
    setUser:()=>null
});


export const UserProvider =({children})=>{
    const [currentUser,setUser] = useState(null)
    const value = {currentUser,setUser}

    useEffect(()=>{
        const unsubscribe=onAuthStateChangedListner((user)=>{
            console.log(user)
            setUser(user)
        })
        
        return unsubscribe;
    },[])
    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}