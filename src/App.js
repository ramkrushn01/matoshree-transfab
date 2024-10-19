import './App.css';
import './css/Navbar.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
