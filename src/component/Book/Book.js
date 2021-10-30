import React from 'react';
import './Book.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Book = (props) => {
    const {key,name,img,price} = props.book;
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
                    <Button className="px-4 m-1" variant="outline-dark"><Link to={`/bookdtails/${key}`}>Details</Link></Button>
                </div>
            </div>  
            </div> 
        </div>
        </>
    );
};

export default Book;