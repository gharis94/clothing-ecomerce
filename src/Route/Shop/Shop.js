import React from 'react'
import {Routes,Route} from 'react-router-dom';
import CategoryPreview from '../../Components/Category-Preview/CategoryPreview';
import CategoryItem from '../../Components/CategoryItem/CategoryItem';

const Shop = () => {
  
  return (
    <Routes>
      <Route index element={<CategoryPreview/>}/>
      <Route path=':category' element={<CategoryItem/>}/>
      
    </Routes>
  )
}

export default Shop

