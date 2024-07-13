import React, { useState } from 'react';
import './NewStocks.css';
import new_stocks from '../Assets/new_stocks';
import { Item } from '../Item/Item';

const BillingForm = ({ onClose }) => {
  return (
    <div className="billing-form">
      <h2>Billing Form</h2>
      <form>
       
        <button type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

const NewStocks = () => {
  const [showBillingForm, setShowBillingForm] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleBuyNow = (item) => {
    setCartItems([...cartItems, item]);
    setShowBillingForm(true);
  };

  return (
    <div className="new-stocks">
      <h1>New Stocks</h1>
      <hr />
      <div className="stocks">
        {new_stocks.map((item, i) => (
          <div key={i} className="new-stocks-item">
            <Item
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
            <button onClick={() => handleBuyNow(item)}>Buy Now</button>
            
            {showBillingForm && (
              <p>Your purchase of {item.name} at ${item.new_price} will be delivered soon.</p>
            )}
          </div>
        ))}
      </div>
      {showBillingForm && <BillingForm onClose={() => setShowBillingForm(false)} />}
    </div>
  );
};

export default NewStocks;
