import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BookDetails.css';

const BookDetails = () => {
    const {bookId} = useParams();
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        fetch('https://quiet-inlet-07765.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>{
            setBooks(data);
            //console.log(data)
        });
    },[bookId])
    const exactData = books.filter(ed=>ed.key == bookId);
    console.log(exactData);
    return (
        <div className="m-md-5">
            <div className="p-2">
            <h1>Details of this service:</h1>
            <div className="d-md-flex border my-md-5 p-md-3">
                <div>
                    <img className="book-detail" src={exactData[0]?.img} alt="" />
                </div>
                <div className="ms-5 my-5">
                <h3>Name: {exactData[0]?.name}</h3>
                <h4>price: {exactData[0]?.price}</h4>
                <p><span className="fw-bold">Descriptions:</span> {exactData[0]?.discription}</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BookDetails;