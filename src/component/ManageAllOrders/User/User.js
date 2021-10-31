import React from 'react';

const User = (props) => {
    const {_id,email}=props.user;
    return (
        <div>
            <p>{_id}</p>
            <h2>Name: {email}</h2>
        </div>
    );
};

export default User;