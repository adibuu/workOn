import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import { BrowserRouter, Routes, Route } from "react-router";
import { SWRConfig } from "swr";
import axios from "axios";

import Layout from "./components/Layout/index.jsx";
import Home from "./routes/Home.jsx";
import Categories from "./routes/Categories.jsx";
import Category from "./routes/Category.jsx";
import Product from "./routes/Product.jsx";
import Account from "./routes/Account.jsx";
import Signup from "./routes/Signup.jsx";
import Profile from "./routes/Profile.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import fetcher from "./fetcher.js";
import { Toaster } from "./components/ui/toaster.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

axios.defaults.baseURL = "https://fakestoreapi.com";
if (localStorage.getItem("jwtToken"))
  axios.defaults.headers.common["Authorization"] =
    localStorage.getItem("jwtToken");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <AuthProvider>
        <SWRConfig value={{ fetcher }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/:category" element={<Category />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/account" element={<Account />} />
                <Route path="/signup" element={<Signup />} />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </SWRConfig>

        <Toaster />
      </AuthProvider>
    </Provider>
  </StrictMode>
);
