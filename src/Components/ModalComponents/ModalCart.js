import { useState } from "react";
import Cart from "../CartComponents/Cart";
import Modal from "./Modal";
import cart from './cart.png'
import { getTotalPrice } from "../../redux/cartSlice";
import { useSelector } from "react-redux";

const ModalCart = () => {
    const [modalActive, setModalActive] = useState(false)
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div className="cartElement">
            <button className="iconCartBtn" onClick={()=> setModalActive(true)}>
                <img className="icons" src={ cart } alt="icon"/><span>$ { totalPrice.toFixed(2) }</span>
            </button>
            <Modal active={ modalActive } setActive={ setModalActive }>
                <Cart/>
            </Modal>
        </div>
    )
}

export default ModalCart;