import { useState, useEffect } from 'react';
import { getStoredCart } from '../utilities/fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getStoredCart();
        console.log(savedCart);
        const keys = Object.keys(savedCart);
            fetch('https://quiet-inlet-07765.herokuapp.com/books/bykeys',{
                method:'POST',
                headers:{
                    'content-type': 'application/json'
                },
                body:json.stringify(keys)
            })
            .then(res=>res.json())
            .then(products =>{
                console.log(products);
                if (products.length) {
                    const storedCart = [];
                    for (const key in savedCart) {
                    const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    })
    }, []);

    return [cart, setCart];
}

export default useCart;