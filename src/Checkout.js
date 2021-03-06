import React from 'react'
import'./Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                
                <img
                    className="checkout__ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Events/Pug/Leadup21-page/ILM/1348895_in_prime_2_PD21_r1_640x45._CB663271234_.jpg"
                    alt=""
                />
                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">
                       Your shopping Basket
                    </h2>
                    {basket.map(item =>(
                        <CheckoutProduct 
                            id = {item.id}
                            title ={item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}

                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
            
        </div>
    )
}

export default Checkout
