import React, { useContext } from 'react'
import styled from 'styled-components';
import {ReactComponent as Bag} from '../../asset/shopping-bag.svg';
import { CartContext } from '../../context/CartContext/CartContext';

const CartIcon = () => {
    const {isCartOpen,setIsCartOpen,cartCount} = useContext(CartContext);
    
  return (
    <Container onClick={()=>setIsCartOpen(!isCartOpen)}>
        <ShoppingIcon/>
        <Count>{cartCount}</Count>
    </Container>
  )
}

export default CartIcon


//styles below

const ShoppingIcon = styled(Bag)`
  width:24px;
  height:24px;
`
const Count = styled.span`
position:absolute;
font-size:10px;
font-weight:bold;
bottom:12px;
`

const Container = styled.div`
  width:45px;
  height:45px;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`