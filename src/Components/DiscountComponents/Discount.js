import DiscountItem from "./DiscountItem";

const Discount = () => {

    const imageContainer = [{img: 'vDAy'}, {img:'hFood'}, {img:'gMorning'}];


    return(
        <div>
            <DiscountItem imageContainer = { imageContainer }/>
        </div>
    )
}

export default Discount;