import React from 'react';
import AddEvent from './AddEvent/AddEvent';

const ManageAllOrders = () => {
    return (
        <div className="row">
            <div className="col-md-3 bg-dark">
                <AddEvent></AddEvent>
            </div>
            <div className="col-md-9"></div>
        </div>
    );
};

export default ManageAllOrders;