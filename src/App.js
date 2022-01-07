import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import DisheList from "./components/admin/DisheList";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";

function App() {
    return (
        <>
            <NavBar/>

            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                        <Route path='/admin/dishe' element={<DisheList />}/>
                        <Route path='/cart' element={<Cart />}/>
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
