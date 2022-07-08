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

import UserContext from "./components/contexts/UserContext";

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
    </UserContext.Provider>
  );
}

export default App;
