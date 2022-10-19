import React,{useEffect} from 'react'
import {Routes,Route} from 'react-router-dom';
import CategoryPreview from '../../Components/Category-Preview/CategoryPreview';
import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import {useDispatch} from 'react-redux'
import {fetchCategoriesAsync} from '../../store/product/productAction'

const Shop = () => {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(fetchCategoriesAsync())
  },[])
  
  return (
    <Routes>
      <Route index element={<CategoryPreview/>}/>
      <Route path=':category' element={<CategoryItem/>}/>
      
    </Routes>
  )
}

export default Shop

