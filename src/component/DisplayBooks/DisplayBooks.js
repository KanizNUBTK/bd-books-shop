import React, { useEffect, useState } from 'react';
import DisplayBook from '../DisplayBook/DisplayBook';

const DisplayBooks = () => {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/books')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data);
            console.log(data)});
    },[])
    return (
        <div className="m-5">
            <div className="book-card">
                {
                books.map(book=><DisplayBook
                    key={book.key}
                    book={book} 
                    ></DisplayBook>)
                }
            </div>
            
        </div>
    );
};

export default DisplayBooks;