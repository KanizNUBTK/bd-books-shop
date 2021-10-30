import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        console.log(data);
        axios.post('http://localhost:5000/addbook',data)
            .then(res=>{
                console.log(res);
            })
    } 
    return (
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
    );
};

export default AddBook;