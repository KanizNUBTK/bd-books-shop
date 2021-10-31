import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table } from 'react-bootstrap';
import AddEvent from '../AddEvent/AddEvent';


const DisplayUser = () => {
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
            console.log(data);
            setDisplayUser(data)});
    },[user?.email])
    const handleDelete=id=>{
        const proceed = window.confirm('Are you sure, you want to delete a cusmoter?');
        if(proceed){
            fetch(`https://quiet-inlet-07765.herokuapp.com/orders/${id}`,{
            method:'DELETE',
        })
        .then(res =>res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                alert('You can delete a customer');
                const remainingUsers = displayUser.filter(user => user._id !== id);
                setDisplayUser(remainingUsers);
            }
        })
        }
    }
    return (
        <div className="row">
            <div className="col-md-3 bg-dark">
                <AddEvent></AddEvent>
            </div>
            <div className="col-md-9">
                <h1>Total Cusmoter: {displayUser?.length}</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Customer Name</th>
                        <th>Customer Email</th>
                        <th>Action</th>
                        <th>Status</th>
                        </tr>
                    </thead>
                    {displayUser?.map((pd, index) => (
                        <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd?.name}</td>
                            <td>{pd?.email}</td>
                            <td><button onClick={()=>handleDelete(pd._id)} className="btn bg-danger p-2">Delete</button></td>
                            <td><button className="btn bg-info p-2">Pending</button></td>
                        </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default DisplayUser;