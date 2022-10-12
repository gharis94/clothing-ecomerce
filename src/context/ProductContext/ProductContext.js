import React,{createContext, useEffect, useState} from "react";
import {getCategoriesAndDocuments} from '../../utils/firebase';
const inititialState ={
    categories:{}
};

export const ProductContext = createContext(inititialState);

export const ProductProvider=({children})=>{
    const [categories,setCategories] = useState({})
    
    useEffect(()=>{
        const categoriesMap =async()=>{
            const data=await getCategoriesAndDocuments();
            setCategories(data);
        }
        categoriesMap()
        
    },[])

    return(
        <ProductContext.Provider value={{categories}}>
            {children}
        </ProductContext.Provider>
    )
}