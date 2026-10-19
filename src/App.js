import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Cart from './components/Cart';
import Products from './components/Products';
import Product from './components/Product';
import Login from './components/Login';
import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
return ( 
<div className="App"> 
<header className="App-header"> 
  <Header /> 
  </header>

  <main className="App-main">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>

  <footer>
    <Footer />
  </footer>
</div>


);
}

export default App;
