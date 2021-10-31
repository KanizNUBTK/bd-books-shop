import React from 'react';
import AddEvent from './AddEvent/AddEvent';
import User from './User/User';

const ManageAllOrders = () => {
    return (
        <div className="row-md">
            <div className="col-md-3 bg-dark">
                <AddEvent></AddEvent>
            </div>
            <div className="col-md-9">
                <User></User>
            </div>
        </div>
    );
};

export default ManageAllOrders;