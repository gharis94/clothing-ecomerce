import {createSelector} from 'reselect';

const cartSelector=(state)=>state.cart

export const cartItemSelector =createSelector(
    [cartSelector],
    (cart)=>cart.cartItems
)
export const cartIsOpenSelector=createSelector(
    [cartSelector],
    (cart)=>cart.isOpen
)
export const cartCountSelector=createSelector(
    [cartItemSelector],
    (cartItem) =>cartItem.reduce((acc, cur) => {
        acc += cur
        return acc
    }, 0)
)

export const cartTotalSelector =createSelector(
    [cartItemSelector],
    (cartItem) => cartItem.reduce((acc, cur) => {
        acc = cur.quantity * cur.price
        return acc
    }, 0)
)


