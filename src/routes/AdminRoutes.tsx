import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function AdminRoutes() {

    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/*" element={<p>No esta creada</p>}/>
            </Routes>
            <Footer/>
        </>
    
);
}

export default AdminRoutes;