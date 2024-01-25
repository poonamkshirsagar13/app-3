import { createContext, useState } from "react";

export interface Cart{
    cartItems?: string[];
    cartTotal?: number;
    cartCounter?: number;
    addItemToCart: (item:string) => void
}

export const CartContext = createContext<Cart>({ addItemToCart: (item) => {} });

export const CartProvider = (props: any) => {
    const { children, propName } = props;
    console.log('children: ', children.length);
    console.log('propName: ',propName);
    const [cartItems, setCartItems] = useState(['xxx']);
    const [cartCounter, setCartCounter] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    const addItemToCart = (item:string) => {
        const count = cartCounter+1;
        setCartTotal(count*10);
        setCartCounter(count);
        setCartItems([...cartItems, item])
    }
    return (<CartContext.Provider 
            value={{
                cartItems,
                cartCounter,
                addItemToCart,
                cartTotal
            }}>
            {children}
    </CartContext.Provider>);
}