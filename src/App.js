import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductList from "./components/admin/ProductList";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProductForm from "./components/admin/ProductForm";

function App() {
    return (
        <>
            <NavBar/>

            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/admin/product' element={<ProductList />}/>
                        <Route path="/admin/product/new" element={<ProductForm />} />
                        <Route path="/admin/product/:id/edit" element={<ProductForm />} />
                        <Route path='/cart' element={<Cart />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
