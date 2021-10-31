import React from 'react';
import { Link } from 'react-router-dom';
import './AddEvent.css';

const AddEvent = () => {
    return (
        <div className="dashboard">
            <ul>
                <li><Link to='/addBook'>Add a new book</Link></li>
                <li><Link to='/displayUser'>Display Users</Link></li>
            </ul>
        </div>
    );
};

export default AddEvent;