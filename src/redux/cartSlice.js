import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },

    reducers: {
        addToCart: (state, action) => {
            const timeId = new Date().getTime();
            state.cartItems.push ({
                id: timeId,
                productId: action.payload.productItem.id,
                price: action.payload.productItem.price,
                quantity: action.payload.quantity,
            })
        },

        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItems => cartItems.id !== action.payload.cartItemsId
            )
        },

        removeAllfromCart: (state) => {
            state.cartItems = []
        },

        increaseQuantityInCart: (state, action) => {
            state.cartItems = state.cartItems.map(cartItem => {
                if(cartItem.id === action.payload.cartItemsId) {
                    return {...cartItem, quantity: cartItem.quantity + 1}
                }
                return cartItem;
            })
        },
        reduceQuantityInCart: (state, action) => {
            state.cartItems = state.cartItems.map(cartItem => {
                if(cartItem.quantity === 1) {
                    return {...cartItem, quantity: cartItem.quantity}
                }
                if(cartItem.id === action.payload.cartItemsId) {
                    return {...cartItem, quantity: cartItem.quantity - 1}
                }
                return cartItem;
            })
        }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return (cartItems.quantity * cartItems.price) + total
        }, 0)
}
export const getCartItems = state => state.cart.cartItems;
export const { addToCart, removeFromCart, removeAllfromCart, increaseQuantityInCart, reduceQuantityInCart } = cartSlice.actions;
export default cartSlice.reducer;