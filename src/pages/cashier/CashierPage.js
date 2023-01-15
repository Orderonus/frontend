import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/shared/NavBar/NavBar";
import SideBar from "../../components/cashier/SideBar/SideBar";
import MenuPage from "./MenuPage/MenuPage";
import OrderPage from "./OrderPage/OrderPage";
import CartPage from "./CartPage/CartPage";
import {
  ContentContainer,
  Main,
  NavMenu,
  PageContainer,
} from "./CashierPageElements";
import QueueIcon from "../../assets/Queue Icon.png";
import { Roles } from "../../utils/Enums";

function CashierPage() {
  const [numOrdersPhysical, setNumOrdersPhysical] = useState(0);
  const [numOrdersOnline, setNumOrdersOnline] = useState(0);
  const [orders, setOrders] = useState([]);

  const add_orders = (id, modifiers, quantity, other_comments = "") => {
    setOrders([
      ...orders,
      {
        id: id,
        modifiers: modifiers,
        quantity: quantity,
        other_comments,
      },
    ]);
  };
  return (
    <Main>
      <NavBar role={Roles.Cashier}>
        <NavMenu>
          <img src={QueueIcon} alt="Queue" width={35} />
          <div>
            Physical orders: <b>{numOrdersPhysical}</b>, Online orders:{" "}
            <b>{numOrdersOnline}</b>
          </div>
        </NavMenu>
      </NavBar>

      <ContentContainer>
        <SideBar cartNumber={orders.length} />
        <PageContainer>
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route
              path="/order/*"
              element={<OrderPage add_order={add_orders} />}
            />
            <Route path="/cart" element={<CartPage orders={orders} />} />
          </Routes>
        </PageContainer>
      </ContentContainer>
    </Main>
  );
}

export default CashierPage;
