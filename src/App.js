import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/Navbar.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import CompanyProfile from "./components/CompanyProfile";
import OurTeam from "./components/OurTeam";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/company-profile/" element={<CompanyProfile/>}/>
                    <Route path="/our-team/" element={<OurTeam/>} />
                </Routes>
                {/* <Sidebar /> */}
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
