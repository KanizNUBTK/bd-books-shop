import React from 'react';

const BookDetail = (props) => {
    const {name,img,price,discription} = props.book;
    return (
        <div>
            <div className="border m-3 book-cart">
            <div>
            <div>
                <img className="book-img" src={img}  alt="" />
            </div>
            <div>
                <h4>Name: {name}</h4>
                <h4>Price: {price}</h4>
                <p><span>Discription:</span> {discription}</p>
            </div>  
            </div> 
        </div>
            
        </div>
    );
};

export default BookDetail;