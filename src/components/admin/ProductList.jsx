import { useEffect, useState } from "react";
import {Link} from "react-router-dom";


const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5050/product")
          .then((response) => response.json())
          .then((products) => setProducts(products))
          .catch((error) => console.error(error));
      }, []);

      return (
        <>
            <hr />
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Price</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Action</th>
                </tr>
                </thead>
                <tbody>
                {products.map(product => {
                    return (
                        <tr key={product.id}>
                            <th scope="row">{product.id}</th>
                            <td>{product.name}</td>
                            <td>{product.price} €</td>
                            <td>{product.stock}</td>
                           <td> <Link className="btn btn-success" to={`/admin/product/${product.id}/edit`}>Edit</Link></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </>
    )
}

export default ProductList;