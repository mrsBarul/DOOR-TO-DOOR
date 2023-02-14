import { useDispatch } from "react-redux";
import { dataProduct } from "../../data/dataProduct";
import { removeFromCart } from "../../redux/cartSlice";
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
                <div className="quantityCart">
                    <p>{productItem.value * cartItem.quantity} {productItem.value === "1" ? 'thing(s)' : productItem.value <= 1.00 ? 'kg' : 'g'}</p>
                </div>
            </div>
            <div className="deleteButton">
                <button className="deletebtn" onClick={()=> dispatch(removeFromCart({cartItemsId: cartItem.id}))}><img className="deletebtnImage" src={ deleteImage } alt='delete'/></button>
            </div>
        </div>
    )
}

export default CartItem;