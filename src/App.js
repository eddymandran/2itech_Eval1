import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";

function App() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path='/' element={<Home />}/>
                    </Routes>
                </div>
            </div>
        </>
    );
}

export default App;
