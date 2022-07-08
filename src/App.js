import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState } from "react";

import WelcomePage from "./components/pages/Welcome/WelcomePage";
import SignInPage from "./components/pages/SignIn/SignInPage";
import SignUpPage from "./components/pages/SignUp/SignUpPage";
import MainPage from "./components/pages/Main/MainPage";
import BasketPage from "./components/pages/Basket/BasketPage";
import CheckoutPage from "./components/pages/Checkout/CheckoutPage";

import "./assets/css/reset.css";
import "./assets/css/index.css";

import { ProductsContext } from "./components/contexts/ProductsContext";

function App() {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/sign-in/" element={<SignInPage />} />
          <Route path="/sign-up/" element={<SignUpPage />} />
          <Route path="/main/" element={<MainPage />} />
          <Route path="/basket/" element={<BasketPage />} />
          <Route path="/checkout/" element={<CheckoutPage />} />
        </Routes>
      </BrowserRouter>
    </ProductsContext.Provider>
  );
}

export default App;
