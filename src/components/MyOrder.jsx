import { useEffect, useState } from "react";

const MyOrder = () => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5050/order")
      .then((response) => response.json())
      .then((orders) => setOrder(orders))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <hr />
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Order number</th>
            <th scope="col">Amount of the order</th>
          </tr>
        </thead>
        <tbody>
          {order.map((OrderItem) => {
            return (
              <tr key={OrderItem.id}>
                <th scope="row">{OrderItem.id}</th>
                <td>{OrderItem.total} € </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <h2>Number of order : {order.length}</h2>
    </>
  );
};

export default MyOrder;
