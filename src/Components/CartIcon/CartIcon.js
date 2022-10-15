import React, { useContext } from 'react'
import styled from 'styled-components';
import {ReactComponent as Bag} from '../../asset/shopping-bag.svg';
import {cartIsOpenSelector} from '../../store/cart/cartSelector'
import {useDispatch,useSelector} from 'react-redux'
import {createAction} from '../../utils/createAction'
import {cartCountSelector} from '../../store/cart/cartSelector'

const CartIcon = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector(cartIsOpenSelector)
    const cartCount =useSelector(cartCountSelector)
    const handleClick=()=>{
      dispatch(createAction(!isOpen))
    }
    
  return (
    <Container onClick={()=>handleClick}>
        <ShoppingIcon/>
        <Count>{cartCount }</Count>
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