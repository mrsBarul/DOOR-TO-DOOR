import Filter from "./Filter";


const Categories = () => {


    return(
        <div className="CategoriesContainer">
            <h2>CATEGORIES</h2>
            <div className="categories">
                {['FOOD', 'FRUIT', 'VEGETABLE', 'BERRY', 'MEAT, FISH', 'BREAD',  'DESSERT', 'DRINK', 'COSMETIC', 'ALL'].map
                ((category, index) => <Filter key={ index } category={ category }/>)}
            </div>
            
        </div>
    )
}

export default Categories;