import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { SWRConfig } from "swr";

import { Provider } from "@/components/ui/provider";
import fetcher from "./utils/fetcher.js";
import RootLayout from "./routes/RootLayout.jsx";
import Home from "./routes/Home.jsx";
import Categories from "./routes/Categories.jsx";
import Category from "./routes/Category.jsx";
import Account from "./routes/Account.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <SWRConfig
        value={{
          fetcher,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RootLayout />}>
              <Route index element={<Home />} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/categories/:name" element={<Category />} />
              <Route path="/account" element={<Account />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </SWRConfig>
    </Provider>
  </StrictMode>
);
