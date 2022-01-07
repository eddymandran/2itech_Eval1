import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

const ProductFormUpdate = () => {

    const [form, setForm] = useState({name: '', price: '', stock: ''})
    const navigate = useNavigate();
    const params = useParams();

    const handleUpdate = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5050/product/${params.id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(product => {
                setForm(product);
                navigate('/admin/product');
            })
            .catch(error => console.error(error));
    }


    const handleChange = (event) => {
        const newData = { ...form };
        newData[event.target.name] = event.target.value;
        setForm(newData);
    }

    /**
     * @info for getting value at loading
     * */

    useEffect(() => {
        if (!params.id) return;

        fetch(`http://localhost:5050/product/${params.id}`)
            .then(response => response.json())
            .then(product => { setForm(product) })
            .catch(error => console.error(error));
    }, [params.id]);


    return (
        <form onSubmit={handleUpdate}>
            <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-control"
                       value={form['name']}
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="price" className="form-label">Price</label>
                <input type="text" id="price" name="price" className="form-control"
                       value={form['price']}
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="stock" className="form-label">Stock</label>
                <input type="text" id="stock" name="stock" className="form-control"
                       value={form['stock']}
                       onChange={handleChange} />
            </div>

            <div><input type="submit" value='Modifier' className="btn btn-success" /></div>
        </form>
    )
}

export default ProductFormUpdate;