import {useState} from "react";
import {useNavigate} from "react-router-dom";

const ProductForm = () => {

    const [form, setForm] = useState({name: '', price: '', stock: ''})
    const navigate = useNavigate();

    const handleCreate = (event) => {
        event.preventDefault();

        fetch('http://localhost:5050/product', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(() => {
                setForm({name: '', price: '', stock: ''});
                navigate('/admin/product')
            })
            .catch(error => console.error(error));
    }

    const handleChange = (event) => {
        const newData = { ...form };

        newData[event.target.name] = event.target.value;

        setForm(newData);
    }
    
    return (
        <form onSubmit={handleCreate}>
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
            <div><input type="submit" value='Créer' className="btn btn-primary" /></div>
        </form>
    )
}

export default ProductForm;