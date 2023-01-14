import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/shared/NavBar/NavBar";
import MenuPage from "./MenuPage/MenuPage";
import OrderPage from "./OrderPage/OrderPage";
import { Main, NavMenu } from "./CashierPageElements";
import QueueIcon from "../../assets/Queue Icon.png";

function CashierPage() {
  const [numOrdersPhysical, setNumOrdersPhysical] = useState(0);
  const [numOrdersOnline, setNumOrdersOnline] = useState(0);

  return (
    <Main>
      <NavBar>
        <NavMenu>
          <img src={QueueIcon} alt="Queue" width={35} />
          <div>
            Physical orders: <b>{numOrdersPhysical}</b>, Online orders:{" "}
            <b>{numOrdersOnline}</b>
          </div>
        </NavMenu>
      </NavBar>

      <Routes>
        <Route path="/" element={<MenuPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </Main>
  );
}

export default CashierPage;
