import React from 'react';
import './orders.css';

const Orders = (props) => {
    const {name, img,price, quantity, key } = props.product;
    const { handleRemove } = props;
    return (
        <div className="product m-md-2">
            <div>
            <img className="book-img" src={img} alt="" />
            </div>
            <div className="p-md-3">
                <h4>Name : {name}</h4>
                <h5>Price : {price}</h5>
                <h6>Purchasing Quantity of Book: {quantity}</h6>
                <button onClick={() => handleRemove(key)} className="btn-regular btn-light px-5 py-2 border-dark">Remove</button>
            </div>
        </div>
    );
};

export default Orders;