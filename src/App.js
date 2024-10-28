import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/Navbar.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
            <Header />
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
