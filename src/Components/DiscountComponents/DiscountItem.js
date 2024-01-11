import { useState, useEffect } from "react";

const DiscountItem = ({ imageContainer }) => {

    const [image, setImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setImage((prevSlide) =>
            prevSlide === imageContainer.length - 1 ? 0 : prevSlide + 1
        );
        }, 4000);
    
        return () => clearInterval(interval);
    }, [imageContainer.length]);
    


    return(
        <div>
            {imageContainer.map((item, index) => (
                <img
                key={index}
                className={`discountImage ${index === image ? 'active' : ''}`}
                style={{ opacity: index === image ? 1 : 0 }}
                src={`./discountImage/${item.img}.png`}
                alt='discount'
                />
            ))}
        </div>
    )
}

export default DiscountItem;