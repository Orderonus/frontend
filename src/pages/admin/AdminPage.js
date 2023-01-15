import React from "react";
import { Routes, useLocation, Route } from "react-router-dom";
import { Main } from "./AdminPageElements";
import { StorePage } from "./StorePage/StorePage";
import NavBar from "../../components/shared/NavBar/NavBar";
import { TabMenuLink } from "../../components/shared/NavBar/NavBarElements";
import { Roles } from "../../utils/Enums";

function AdminPage() {
  const location = useLocation();
  return (
    <Main>
      <NavBar role={Roles.Admin}>
        <TabMenuLink to="">Store Info</TabMenuLink>
        <TabMenuLink to="dishes">Dishes</TabMenuLink>
        <TabMenuLink to="staff">Staff</TabMenuLink>
        <TabMenuLink to="orders">Orders</TabMenuLink>
      </NavBar>

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
