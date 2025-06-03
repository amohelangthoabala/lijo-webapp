import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CheckoutPage from './components/CheckoutPage';
//import About from './components/About';
//import Services from './components/Services';
import Menu from './components/Menu';
//import Testimonials from './components/Testimonials';
//import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/menu" element={<Menu />} />
          {/* <Route path="/testimonials" element={<Testimonials />} /> */}
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;