import { useState } from "react";
import Categories from "../CategoriesComponents/Categories";
import Modal from "./Modal";
import menu from './menu.png'

const ModalCategories = () => {
    const [modalActive, setModalActive] = useState(false)
    return(
        <div>
            <button className="iconMenuBtn" onClick={()=> setModalActive(true)}>
                <img src={ menu } className="icons iconMenu" alt="icon"/>
            </button>
            <Modal active={ modalActive } setActive={ setModalActive }>
                <Categories/>
            </Modal>
        </div>
    )
}

export default ModalCategories;