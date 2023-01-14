import React from "react";
import { Routes, Route } from "react-router-dom";
import CashierPage from "./pages/cashier/CashierPage";
import KitchenPage from "./pages/kitchen/KitchenPage";
import KitchenCompleted from "./pages/kitchen/KitchenCompleted"
import AdminPage from "./pages/admin/AdminPage";
import BuyerPage from "./pages/buyer/BuyerPage";

function App() {
  return (
    <div className="App" style={{height: "100vh"}}>
      <Routes>
        <Route exact path="/cashier" element={<CashierPage />} />
        <Route exact path="/kitchen" element={<KitchenPage />} />
        <Route exact path="/kitchen-completed" element={<KitchenCompleted />} />
        <Route exact path="/admin" element={<AdminPage />} />
        <Route exact path="/buyer" element={<BuyerPage />} />
      </Routes>
    </div>
  );
}

export default App;
