import {useContext, useEffect, useState} from "react";
import {CartContext} from "../contexts/CartContextProvider";
import {useToasts} from 'react-toast-notifications';
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const {cart, resetCart} = useContext(CartContext);
    const [total, setTotal] = useState(0);

    const navigate = useNavigate();
    const {addToast} = useToasts();

    useEffect(() => {
        let temporaryTotal = 0

        cart.forEach(cartItem => {
            temporaryTotal += cartItem.price * cartItem.quantity;
            setTotal(temporaryTotal);
        })
    }, [cart]);

    const handleValidate = () => {

        let order = {cart, total}
        fetch('http://localhost:5050/order', {
            headers: {'Content-Type': 'application/json'},
            method: 'POST',
            body: JSON.stringify(order)
        })
            .then(response => response.json())
            .then(() => {
                addToast('order successfully validated !', {
                    appearance: 'success',
                    autoDismiss: true,
                });
                resetCart()
                setTotal(0)
                navigate('/')
            })
            .catch((error) => {
                console.log(error);
                addToast("sorry something went wrong !", {
                    appearance: 'error',
                    autoDismiss: true,
                });
            });
    };

    return (
        <>
            <hr/>
            <table className="table table-striped">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">quantity</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                {cart.map(cartItem => {
                    return (
                        <tr key={cartItem.id}>
                            <th scope="row">{cartItem.id}</th>
                            <td>{cartItem.name}</td>
                            <td>{cartItem.price} €</td>
                            <td>{cartItem.quantity}</td>
                            <td>{cartItem.price * cartItem.quantity} €</td>
                        </tr>
                    );
                })}

                </tbody>
            </table>
            <h3 className="text-center">Total : {total} €</h3>
            <button className="btn btn-primary" onClick={handleValidate}>Validate order</button>
        </>
    )
}

export default Cart;