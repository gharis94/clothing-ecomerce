import React,{useEffect} from 'react'
import {Routes,Route} from 'react-router-dom';
import CategoryPreview from '../../Components/Category-Preview/CategoryPreview';
import CategoryItem from '../../Components/CategoryItem/CategoryItem';
import {getCategoriesAndDocuments} from '../../utils/firebase'
import {useDispatch} from 'react-redux'
import {setCategories} from '../../store/product/productAction'

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    const categoriesMap = async()=>{
      const data = await getCategoriesAndDocuments()
      console.log('dis')
       dispatch(setCategories(data))
    }
    categoriesMap()
  },[])
  
  return (
    <Routes>
      <Route index element={<CategoryPreview/>}/>
      <Route path=':category' element={<CategoryItem/>}/>
      
    </Routes>
  )
}

export default Shop

