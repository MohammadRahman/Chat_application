import React from 'react'
import './cart.styles.scss'
import CartItem from './CartItem'

type CartItemType = {
    id: string,
    price: number,
    title: string,
    amount:number
}

type Props = {
    cartItems: CartItemType[],
    addtoCart: (clickedItem: CartItemType) => void,
    removeFromCart: (id:number)=> void
}

const Cart: React.FC<Props> = ({ cartItems, addtoCart, removeFromCart }) => {
    
    const getTotalItems = (items: CartItemType[]) => {
        items.reduce((ack:number, item)=> ack + item.amount, 0)
    }
    return <div className="cart-container">
        <h2>Your Shopping Cart</h2> 
        {cartItems.length === 0 ? <p>No Items in cart.</p> : null}
        {cartItems.map(item => (
          <CartItem />
      ))}  
    </div>
}

export default Cart
