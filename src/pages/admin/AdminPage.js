import React from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import { AdminMenuLink, AdminNav, Main } from "./AdminPageElements";
import { StorePage } from "./store_info/StorePage";

function AdminPage() {
  const location = useLocation();
  return (
    <Main>
      <AdminNav>
        <AdminMenuLink to="">Store Info</AdminMenuLink>
        <AdminMenuLink to="dishes">Dishes</AdminMenuLink>
        <AdminMenuLink to="staff">Staff</AdminMenuLink>
        <AdminMenuLink to="orders">Orders</AdminMenuLink>
      </AdminNav>

      <Routes>
        <Route path="/" element={<StorePage />} />
        <Route path="/dishes" element={"Dishes"} />
        <Route path="/staff" element={"Staff"} />
        <Route path="/orders" element={"Orders"} />
      </Routes>
    </Main>
  );
}

export default AdminPage;
