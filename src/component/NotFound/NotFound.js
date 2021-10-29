import React from 'react';
import notFound from '../../image/notFound.jpg';

const NotFound = () => {
    return (
        <div className="m-md-5 d-md-flex justify-content-center align-items-center">
            <img className="w-75" src={notFound} alt="" />
        </div>
    );
};

export default NotFound;