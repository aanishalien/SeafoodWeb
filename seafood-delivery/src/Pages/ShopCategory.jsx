import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import { Item } from '../Components/Item/Item';

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className='shop-category'>
            <img className="shopcategory" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 stocks
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
                <div className="shopCategory-products">
                    {all_product.map((item, i) => {
                        console.log('item.image:', item.image); // Add this line to debug the image URL
                        if (props.category === item.category) {
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                        } else {
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

export default ShopCategory;
