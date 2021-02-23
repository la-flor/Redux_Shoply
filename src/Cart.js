import React from "react";
import { useSelector } from "react-redux";
import "./Cart.css";

function Cart() {
    const {
        cartItems,
        cartValue,
        products
    } = useSelector(st => st);

    const itemRows = Object.keys(cartItems).map(id => (
            <tr>
                <td className="text-left align-left px-4">
                    {products[id].name}
                </td>

                <td className="text-right align-right px-4">    
                    ${products[id].price}
                </td>
            </tr>
    ));

    return (
        <div className="Cart-table p-4">
            <h3>Shopping Cart</h3>

            <table>
                <thead>
                    <th className="text-left align-left p-4">
                        Product:
                    </th>
                    <th className="text-right align-right p-4">
                        Price:
                    </th>
                </thead>

                <tbody>
                    {itemRows}
                </tbody>
            </table>
            
            <span>
                {Object.keys(cartItems).length === 0 
                    ? <p>There are no items in your cart yet!</p>
                    : <p className="pt-5 text-right"><b>Total: {cartValue}</b></p>
                }
            </span>
        </div>
    )
}

export default Cart;