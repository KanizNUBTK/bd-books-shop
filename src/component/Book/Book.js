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
                <div className="d-flex justify-content-between">
                    <Button className="px-4 m-1" variant="outline-dark"  onClick={() => props.handleAddToCart(props.book)}>Buy Now</Button>
                    <Button className="px-4 m-1" variant="outline-dark">Details</Button>
                </div>
            </div>  
            </div> 
        </div>
        </>
    );
};

export default Book;