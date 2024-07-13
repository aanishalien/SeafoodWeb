import React from 'react'

import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewStocks from '../Components/NewStocks/NewStocks'
import NewsLetter from '../Components/NewsLetter/NewsLetter'


const Shop = () => {
    return (
        <div>
            
            <Popular />
            <Offers/>
            <NewStocks/>
            <NewsLetter/>
            

        </div>
    );
};

export default Shop;
