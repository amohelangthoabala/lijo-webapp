import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import CheckoutPage from './components/CheckoutPage';
import Dish from './components/Dish';
import Menu from './components/Menu';
import Order from './components/Order';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import BottomNav from './components/BottomNav'; 
import ProductDetails from './components/ProductDetails'; 

function App() {
  return (
    <div className="container">
      <Header />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<Menu />} />
          <Route path="/orders" element={<Order />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dishes" element={<Dish />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>

      <BottomNav /> {/* Show bottom nav only on mobile */}
    </div>
  );
}

export default App;