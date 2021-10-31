import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { clearTheCart,getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset,formState: { errors } } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart;
        fetch('https://quiet-inlet-07765.herokuapp.com/orders',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        //console.log(data)
        })
        .then(res=>res.json())
        .then(result =>{
            if(result.insertedId){
                alert('Order processed successfully');
                clearTheCart();
                reset();
            }
        });
    };
    return (
        <div className="form-design">
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-center">Please Enter Your Address</h2>
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;