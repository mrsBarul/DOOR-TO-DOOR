import { useState } from "react";

const DiscountItem = ({ imageContainer }) => {

    const [image, setImage] = useState(0)
    const { img } = imageContainer[image]

    const next = () => {
        setImage((image => {
            image ++;
            if(image > imageContainer.length - 1) {
                return image = 0;
            }
            return image
            
        }
    ))}

    setTimeout(next, 5000)


    return(
        <div>
            <img className="discountImage" src={`./discountImage/${ img }.png`} alt='discount'/>
        </div>
    )
}

export default DiscountItem;