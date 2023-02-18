import { useDispatch } from "react-redux";
import { dataProduct } from "../../data/dataProduct";
import { increaseQuantityInCart, reduceQuantityInCart, removeFromCart } from "../../redux/cartSlice";
import deleteImage from './delete.png';

const CartItem = ({ cartItem }) => {
    
    const productItem = dataProduct.find(item => item.id === cartItem.productId);
    const dispatch = useDispatch();

    return(
        <div className="cartItemContainer">
            <div>
                <img className="productImageCart" src={`./photo/${ productItem.img }.png`} alt='food'/>
            </div>
            <div className="discriptionCart">
                <div className="headerProductCart">
                    <p>{ productItem.name }</p>
                    <p>$ { (productItem.price * cartItem.quantity).toFixed(2) }</p>
                </div>
                <div className="quantityButtonContainer">
                    <button className="quantityButton" onClick={() => dispatch(reduceQuantityInCart({ cartItemsId: cartItem.id, quantity: cartItem.quantity }))}>-</button>
                    <p>{ cartItem.quantity }</p>
                    <button className="quantityButton" onClick={() => dispatch(increaseQuantityInCart({ cartItemsId: cartItem.id, quantity: cartItem.quantity }))}>+</button>
                </div>
            </div>

            <div className="deleteButton">
                <button className="deletebtn" onClick={()=> dispatch(removeFromCart({cartItemsId: cartItem.id}))}><img className="deletebtnImage" src={ deleteImage } alt='delete'/></button>
            </div>
        </div>
    )
}

export default CartItem;