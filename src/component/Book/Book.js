import React from 'react';
import './Book.css';
import { Button } from 'react-bootstrap';

const Book = (props) => {
    const {name,img,price} = props.book;
    return (
        <>
        <div className="border m-3 book-cart">
            <div>
            <div>
                <img className="book-img" src={img}  alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <h4>Price: {price}</h4>
                <Button variant="light"  onClick={() => props.handleAddToCart(props.book)}>Buy Now</Button>
                <Button variant="light">Details</Button>
            </div>  
            </div> 
        </div>
        </>
    );
};

export default Book;