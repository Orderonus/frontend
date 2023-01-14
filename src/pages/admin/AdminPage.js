import React from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import { AdminMenuLink, AdminNav } from "./AdminPageElements";

function AdminPage() {
  const location = useLocation();
  return (
    <div>
      <AdminNav>
        <AdminMenuLink to="">Store Info</AdminMenuLink>
        <AdminMenuLink to="dishes">Dishes</AdminMenuLink>
        <AdminMenuLink to="staff">Staff</AdminMenuLink>
        <AdminMenuLink to="orders">Orders</AdminMenuLink>
      </AdminNav>
      <Routes>
        <Route path="/" element={"Store Info"} />
        <Route path="/dishes" element={"Dishes"} />
        <Route path="/staff" element={"Staff"} />
        <Route path="/orders" element={"Orders"} />
      </Routes>
    </div>
  );
}

export default AdminPage;
