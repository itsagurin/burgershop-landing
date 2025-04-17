import './App.scss';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import {Route, Routes} from "react-router";
import Home from "../components/Home/Home.jsx";
import Login from "../components/Auth/Login/Login.jsx";
import Register from "../components/Auth/Register/Register.jsx";
import ResetPassword from "../components/Auth/ResetPassword/ResetPassword.jsx";

function App() {

    return (
        <>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/reset-password" element={<ResetPassword/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}

export default App