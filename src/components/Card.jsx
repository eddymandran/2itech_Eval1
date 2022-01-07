const Card = ({ title, price, stock }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>

            <div className="card-body">
                <h5 className="card-title">{ title }</h5>
                <p className="card-text">{ price } €</p>
                {stock > 0 && <button className="btn btn-success" >Buy me </button>}

            </div>
        </div>
    );
}

export default Card;