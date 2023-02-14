import { useDispatch } from "react-redux";
import {  filter } from "../../redux/productSlice";

const Filter = ({ category }) => {

    const dispatch = useDispatch();


    return(
        <div className="categoriesItem">
            <p onClick={() => dispatch(filter(category))}><span className="circle"></span>{ category }</p>
        </div>
    )
}

export default Filter;