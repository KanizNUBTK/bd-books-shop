import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddBook.css';
import AddEvent from '../ManageAllOrders/AddEvent/AddEvent';
import useFirebase from '../../hooks/useFirebase';

const AddBook = () => {
    const {user} = useFirebase();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        data.email=user?.email;
        axios.post('https://quiet-inlet-07765.herokuapp.com/addbook',data)
            .then(res=>{
                if(res.data.insertedId){
                    alert('Thank you your product added successfull');
                }
            })
    } 
    return (
        <div className="row">
            <div className="col-md-3 bg-dark">
                <AddEvent></AddEvent>
            </div>
            <div className="col-md-9">
            <div className="add-book m-5">
            <h2 className="text-center fw-bold fs-3 p-4">Are you want to add your book?</h2>
            <div className="from-design">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Book name" {...register("name", { required: true })} />
                <input placeholder="Book image url" {...register("img", { required: true })} />
                <input placeholder="Book price" tyep="number"{...register("price", { required: true })} />
                <textarea placeholder="Book description" {...register("discription", { required: true })} />
                <input type="submit" />
            </form>
            </div>
        </div>
            </div>
        </div>
    );
};

export default AddBook;