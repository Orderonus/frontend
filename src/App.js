import React from "react";
import { Routes, Route } from "react-router-dom";
import CashierPage from "./pages/cashier/CashierPage";
import KitchenPage from "./pages/kitchen/KitchenPage";
import AdminPage from "./pages/admin/AdminPage";
import BuyerPage from "./pages/buyer/BuyerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/cashier" element={<CashierPage />} />
        <Route exact path="/kitchen" element={<KitchenPage />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/buyer" element={<BuyerPage />} />
      </Routes>
    </div>
  );
}

export default App;
