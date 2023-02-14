import { useEffect, useState } from "react";
import { dataDiscount } from "../../data/dataDiscount";

const DiscountItem = () => {


    const [discount, setDiscount] = useState(0);
    const { img } = dataDiscount[discount];

    const next = () => {
        setDiscount((discount =>{
            discount ++;
            if(discount > dataDiscount.length - 1) {
                return discount = 0;
            }
            return discount
        }
        ))
    }

    useEffect(() => {
        setTimeout((next)
        , 3000)
    }, [discount])

    return(
        <div>
            <img className="discountImage" src={`./discountImage/${ img }.png`} alt='discount'/>
        </div>
    )
}

export default DiscountItem;