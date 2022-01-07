
import {useContext} from "react";
import {CartContext} from "../contexts/CartContextProvider";



const Card = ({product}) => {

    const {addToCart} = useContext(CartContext);

    return (
        <div className="card" style={{width: "18rem"}}>

            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price} €</p>
                {product.stock > 0 && <button className="btn btn-success" onClick={ () => addToCart(product)}>Buy me </button>}
            </div>
        </div>
    );
}

export default Card;