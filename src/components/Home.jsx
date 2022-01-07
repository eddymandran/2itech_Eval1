import {useEffect, useState} from "react";
import Card from "./Card";


const Home = () => {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    fetch("http://localhost:5050/product")
      .then((response) => response.json())
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  return products.map((product, index) => {
    return (
      <Card
        key={index}
        product={product}

      />
    );
  });
};

export default Home;
