import { useDispatch, useSelector } from "react-redux";
import { getCartItems, getTotalPrice, removeAllfromCart } from "../../redux/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch()

    return(
        <div className="CartContainer">
            <h2>CART</h2>
            <div className="totalPrice">
                <h3>Total Price: ${ totalPrice.toFixed(2) }</h3>
                <button className="deleteAllButton" onClick={() => dispatch(removeAllfromCart({cartItems: []}))}>
                    REMOVE ALL
                </button>
            </div>
            {cartItems.map((cartItem, index)=>
            <CartItem key={ index } cartItem={ cartItem }/>)}
        </div>
    )
}

export default Cart;