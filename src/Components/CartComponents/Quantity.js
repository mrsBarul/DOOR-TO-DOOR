const Quantity = ({ quantity, setQuantity }) => {

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const reduceQuantity = () => {
        if(quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return(
        <div className="quantityButtonContainer">
            <button className="quantityButton" onClick={reduceQuantity}>-</button>
            <p>{ quantity }</p>
            <button className="quantityButton" onClick={increaseQuantity}>+</button>
        </div>
    )
}

export default Quantity;