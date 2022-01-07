import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import ProductList from "./components/admin/ProductList";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import ProductForm from "./components/admin/ProductForm";
import ProductFormUpdate from "./components/admin/ProductFormUpdate";
import CartContextProvider from "./contexts/CartContextProvider";
import { ToastProvider } from 'react-toast-notifications';
import MyOrder from "./components/MyOrder";

function App() {
    return (
        <>
        <ToastProvider placement="top-right">
            <CartContextProvider>

            <NavBar/>
            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/admin/product' element={<ProductList />}/>
                        <Route path="/admin/product/new" element={<ProductForm />} />
                        <Route path="/admin/product/:id/edit" element={<ProductFormUpdate />} />
                        <Route path='/cart' element={<Cart />}/>
                        <Route path='/myorder' element={<MyOrder />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>

            </CartContextProvider>
        </ToastProvider>
        </>
    );
}

export default App;
