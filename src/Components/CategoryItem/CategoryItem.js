import React,{useContext} from 'react'
import { useParams } from 'react-router-dom'
import CardItem from '../CardItem/CardItem';
import styled from 'styled-components';
import {useSelector} from 'react-redux'
import {categoriesSelectorItems} from '../../store/product/productSelector'

const CategoryItem = () => {
    const {category} = useParams();
    const categories = useSelector(categoriesSelectorItems)  
  return (
    <>
        <Heading>{category.toUpperCase()}</Heading>
        <Container>
            {
                categories[category].map(item => ( <
                    CardItem key = {
                        item.id
                    }
                    item = {
                        item
                    }
                    />
                ))
            }
        </Container>
        
    </>
  )
}

export default CategoryItem

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const Heading = styled.h2`
text-align:center
`