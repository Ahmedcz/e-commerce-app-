import React from 'react';

function Cart({ cartItems }) {

    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {
                    cartItems.map(
                       (item, index) => (
                        <li key={index}>
                        <p>{item.Name}</p>
                        <p>{item.Engine}</p>
                        <p>{item.Drivetrain}</p>
                        <p>{item.Transmission}</p>
                        <p>{item.Warranty}</p>
                        </li>
                       )
                    )
                }
            </ul>
        </div>
    )

}

export default Cart;