import React, { useContext } from 'react'
import { CartContext } from '../../context/cart';

export default function LeftPanel(props:any) {
const { appCounter, appButtonCounter } = props;
const {cartCounter, addItemToCart} = useContext(CartContext);
return (
    <>
        <div>LeftPanel</div>
        <div>App: {appCounter}</div>
        <button onClick={()=> appButtonCounter()}> App : counter+</button>
        <button onClick={()=> addItemToCart('itemFromLeft')}> Cart : counter+</button>
    </>
  )
}
