import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table } from 'react-bootstrap';
import './User.css';

const User = () => {
    const {user} = useAuth();
    const [displayUser, setDisplayUser] = useState([]);
    useEffect(()=>{
        fetch(`https://quiet-inlet-07765.herokuapp.com/orders`,{
            method:"GET",
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify()
        })
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            setDisplayUser(data)});
    },[user?.email])
    

    // for(const exactData in books){
    //     const quantity= exactData;
    //     console.log(quantity);
    // }
    //const exactData = books.filter(ed=>ed.key == bookId);
    //console.log(exactData);
    return (
        <div>
                <h1>Total Cusmoter: {displayUser?.length}</h1>
                <Table striped bordered hover responsive="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        </tr>
                    </thead>
                    {displayUser?.map((pd, index) => (
                        <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                        </tr>
                        </tbody>
                    ))}
                </Table>
        </div>
    );
};

export default User;