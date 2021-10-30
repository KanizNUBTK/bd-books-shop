import React from 'react';
import ahmed from '../../image/ahmed.jpg';
import iqbal from '../../image/iqbal.jpg';
import './Author.css';

const Author = () => {
    return (
        <div className="d-flex m-5">
            <div className="border px-5 py-3 d-flex me-3">
            <div>
                <img className="author-img" src={ahmed} alt="" />
            </div>
            <div className="ms-5">
                <p><span className="fw-bold fs-5">Humayun Ahmed</span> was a Bangladeshi novelist, dramatist, screenwriter, filmmaker, songwriter, scholar, and professor. His breakthrough was his debut novel Nondito Noroke published in 1972. He wrote over 200 fiction and non-fiction books, many of which were bestsellers in Bangladesh.</p>
            </div>
            </div>
            <div className="border px-5 py-3 d-flex ms-3">
                <div>
                    <img className="author-img" src={iqbal} alt="" />
                </div>
                <div>
                    <p className="ms-5"><span className="fw-bold fs-5">Muhammed Zafar Iqbal</span> is a Bangladeshi science fiction author, physicist, academic and activist. He was a professor of computer science and engineering and Head of the department of Electrical and Electronic Engineering at Shahjalal University of Science and Technology.He retired from SUST in 3 October 2018</p>
                </div>
            </div>
        </div>
    );
};

export default Author;