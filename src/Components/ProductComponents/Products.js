import { useSelector } from "react-redux";
import { dataProduct } from "../../data/dataProduct";
import { getSelectedCategory } from "../../redux/productSlice";
import { getSearchWord } from "../../redux/searchSlice";
import ProductItem from "./ProductItem";

const Products = () => {

    const selectedCategory = useSelector(getSelectedCategory) 
    const searchWord = useSelector(getSearchWord)
    

    return(
        <div className="productsContainer">
            {dataProduct.filter(productItem => {
                if(selectedCategory === "ALL") return true 
                else if (searchWord === '') return selectedCategory === productItem.category
                return productItem.name.toLowerCase().includes(searchWord)
            })
            .map((productItem, index) => 
            <ProductItem key={ index } productItem={ productItem }/>)}
        </div>
    )
}

export default Products;