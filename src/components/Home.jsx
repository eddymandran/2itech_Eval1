import {useEffect, useState} from "react";
import Card from './Card';

const Home = () => {
    const [products, setProducts] =useState();


    useEffect(() => {
        fetch('http://localhost:5050/product')
            .then(response => response.json())
            .then(products => setProducts(products))
            .catch(error => console.error(error));
    }, [])

    console.log((products))

    return (
        products.map((product, index) => {
            return (
                <Card key={index}
                      title={product.name}
                      price={product.price}
                      stock={product.stock}
                />
            )
        })
    )
}

export default Home;