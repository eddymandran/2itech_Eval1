import React, {createContext, useState} from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        let cartItem = {};
        let newCart = [...cart]

        let cartItemExists = newCart.find(cartItem => {
            if (cartItem.id === product.id) {
                cartItem.quantity++;
            }
            return cartItem.id === product.id
        });

        if (!cartItemExists) {
            cartItem = {id: product.id, name: product.name, price: product.price, quantity: 1};
            newCart.push(cartItem);
        }

        setCart(newCart);

    }

    const resetCart = () => {
        setCart([]);
    }

    return (
        <CartContext.Provider
            value={{cart, setCart, addToCart, resetCart}}
        >
            {children}
        </CartContext.Provider>
    );
};
export default CartContextProvider;
