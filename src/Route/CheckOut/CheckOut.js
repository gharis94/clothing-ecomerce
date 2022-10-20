import React from 'react'
import styled from 'styled-components'
import CheckOutItem from '../../Components/CheckOutItem/CheckOutItem'
import {useSelector} from 'react-redux';
import {cartItemSelector} from '../../store/cart/cartSelector'

const CheckOut = () => {
    const cartItems = useSelector(cartItemSelector)
    
  return (
    <Container>
        <HeaderContainer>
            <Block>
                <span>Product</span>
            </Block>
            <Block>
                <span>Description</span>
            </Block>
            <Block>
                <span>Quantity</span>
            </Block>
            <Block>
                <span>Price</span>
            </Block>
            <Block>
                <span>Remove</span>
            </Block>
        </HeaderContainer>
        <div>
            {
                cartItems.length>0? (
                    cartItems.map(item=>(
                        <CheckOutItem key={item.id} item={item}/>
                    ))
                ):(<h5>No item in the bucket</h5>)
            }
        </div>
        
    </Container>
  )
}

export default CheckOut

// below styles code

const Container = styled.div`
  width:100%;
  min-height:70vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  margin:50px auto 0;
`
const Block = styled.div`
    text-transform:capitalize;
    width:23%;

    &:last-child {
        width:8%;
    }

`
const HeaderContainer = styled.div`
width:80%;
padding:10px 0;
display:flex;
justify-content:space-between;
border-bottom:1px solid darkgrey;
    
`

