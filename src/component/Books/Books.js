import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useCart from '../../hooks/useCart';
import { addToDb } from '../../utilities/fakedb';
import { Link, useHistory } from 'react-router-dom';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Books.css';

const Books = () => {
    const [books,setBooks] = useState([]);
    const [cart, setCart] = useCart();
    const history = useHistory();
    useEffect(()=>{
        fetch('https://quiet-inlet-07765.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data);
            //console.log(data)
        });
    },[])
    const handleAddToCart = (book) => {
        const exists = cart.find(pd => pd.key === book.key);
        let newCart = [];
        console.log('click');
        if (exists) {
            const rest = cart.filter(pd => pd.key !== book.key);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, book];
        }
        else {
            book.quantity = 1;
            newCart = [...cart, book];
        }
        setCart(newCart);
        // save to local storage (for now)
        addToDb(book.key);
        
    }
    const handlecart = () => {
        // setCart([]);
        // clearTheCart();
        history.push('/orders');
    }
    return (
        <div className="shop-container">
            <div className="product-container">
            <div className="book-card">
                {
                books.map(book=><Book 
                    key={book.key}
                    book={book} 
                    handleAddToCart={handleAddToCart}
                    ></Book>)
                }
            </div>
            </div>
            <div className="cart-container">
                    <Cart cart={cart}>
                    <button onClick={handlecart} className="btn-regular"><Link to="/orders"></Link>View your orders</button>
                    </Cart>
                </div>
            
        </div>
    );
};

export default Books;