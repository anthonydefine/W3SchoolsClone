import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Shop from './pages/shop/shop';
import { Cart } from "./pages/cart/cart";
import Footer from './components/footer';
import { ShopContextProvider } from './context/shop-context';
import ProductPage from './pages/product/product-page';
import './App.css'
import './index.css'

function App() {
  return (
    <ShopContextProvider>
      <Navigation />
        <Routes>
          <Route exact path='/'>
            <Route index element={<Shop />}/>
            <Route path=':productId' element={<ProductPage />} />
          </Route>
          <Route exact path='/cart' element={<Cart />} />
        </Routes>
      <Footer />
    </ShopContextProvider>
  );
};

export default App;
