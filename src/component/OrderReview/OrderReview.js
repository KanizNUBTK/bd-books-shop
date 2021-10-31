import React from 'react';
import { useHistory } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Orders from '../Orders/Orders';
import './OrderReview.css';
import { Link } from 'react-router-dom';

const OrderReview = () => {
    //const [products] = useProducts();
    const [cart, setCart] = useCart();
    const history = useHistory();
    
    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
       // console.log('Cart');
        //console.log(newCart);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = (key) => {
        // setCart([]);
        // clearTheCart();
        history.push('/shipping');
    }
    return (
        <div className="shop-container">
            <div className="book-container">
                {
                    cart.map(product => <Orders
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></Orders>)
                }
            </div>
            <div className="cart-container">
                <div>
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn-regular"><Link to="/shipping"></Link>Proceed to Shipping</button>
                </Cart>
                </div>
            </div>
            
        </div>
    );
};

export default OrderReview;