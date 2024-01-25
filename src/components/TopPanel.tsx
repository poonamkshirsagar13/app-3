import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cart';

export default function TopPanel(props: any) {
    const { appCounter, appButtonCounter } = props;
    const [topCounter, setTopCounter] = useState(0);
    const topButtonCounter = () => {
        setTopCounter(topCounter + 1);
    }

    const {cartCounter, cartTotal} = useContext(CartContext);

  return (
    <>
        <div>TopPanel: </div>
        <div>App: {appCounter}</div>
        <div>Top: {topCounter}</div>
        <div>Cart: {cartCounter}</div>
        <div>CartTotal: {cartTotal}</div>
        <button onClick={()=> appButtonCounter()}> App : counter+</button>
        <button onClick={()=> topButtonCounter()}> Top : counter+</button>
    </>
  )
}
