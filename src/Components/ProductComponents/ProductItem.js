import { useState } from "react";
import { useDispatch } from "react-redux";
import Quantity from "../CartComponents/Quantity";
import { addToCart } from "../../redux/cartSlice";

const ProductItem = ({ productItem }) => {

    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    return(
        <div className="productItem">
            <div className="headerProduct">
                <div className="image">
                    <img className="productImage" src={`./photo/${ productItem.img }.png`} alt='food'/>
                </div>
                <h3>{ productItem.name }</h3>
            </div>
            <div className="description">
                <p>$ { productItem.price } <span>/</span> { productItem.value } {productItem.value === "1" ? 'thing(s)' : productItem.value <= 1.00 ? 'kg' : 'g'}</p> 
                <p>{ productItem.description }</p>
            </div>
            <div className="addToCart">
                <div className="quantity">
                    <Quantity quantity={ quantity } setQuantity={ setQuantity }/>
                </div>
                <div className="addButtonContainer">
                    <button className="addButton" onClick={() => dispatch(addToCart({ productItem, quantity}))}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem;