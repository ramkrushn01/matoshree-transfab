import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/Navbar.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import CompanyProfile from "./components/CompanyProfile";
import OurTeam from "./components/OurTeam";
import InfrastructureFacility from "./components/InfrastructureFacility";
import Products from "./components/Products";
import Services from "./components/Services";
import Clients from "./components/Clients";
import ContactUs from "./components/ContactUs";
import WhyUs from "./components/WhyUs";
import PhotoOfWorkShop from "./components/PhotoOfWorkShop";

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
                    <Route path="/infrastructure-facilities" element={ <InfrastructureFacility/> }/>
                    <Route path="/products" element={ <Products /> } />
                    <Route path="/services" element={ <Services/> } />
                    <Route path="/clients" element={ <Clients /> } />
                    <Route path="/contact-us" element={ <ContactUs /> }/>
                    <Route path="/why-us/" element={<WhyUs/>}/>
                    <Route path="/photo-of-workshop/" element={<PhotoOfWorkShop />}/>
                </Routes>
                {/* <Sidebar /> */}
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
