import React, { useContext } from 'react'
import { CartContext } from '../../context/cart';

export default function RightPanel(props:any) {
const { appCounter, appButtonCounter } = props;
const {cartCounter, addItemToCart, cartItems} = useContext(CartContext);
  return (
    <>
        <div>RightPanel</div>
        <div>App: {appCounter}</div>
        <div>Cart: {cartCounter}</div>
        <button onClick={()=> appButtonCounter()}> App : counter+</button>
        <button onClick={()=> addItemToCart('itemFromRight')}> Cart : counter+</button>
        <div>
          {
            cartItems?.map((item)=> {
              return <li>{item}</li>
            })
          }
        </div>
    </>
  )
}
