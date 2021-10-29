import React from 'react';
import { Button } from 'react-bootstrap';
import './DisplayBook.css';
import { Link } from 'react-router-dom';

const DisplayBook = (props) => {
    const {name,img,price} = props.book;
    return (
        <div>
            <div className="book-cart">
            <div>
                <img className="book-img" src={img}  alt="" />
            </div>
            <div className="mx-3 my-2">
                <h4>Name: {name}</h4>
                <h5>Price: {price}</h5>
                <Button className="w-100 m-1 fw-bold fs-5" variant="outline-dark">
                    <Link to="/books">Details</Link>
                </Button>
            </div>  
        </div>
            
        </div>
    );
};

export default DisplayBook;