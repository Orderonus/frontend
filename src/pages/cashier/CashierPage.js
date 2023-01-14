import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/shared/NavBar/NavBar";
import SideBar from "../../components/cashier/SideBar/SideBar";
import MenuPage from "./MenuPage/MenuPage";
import OrderPage from "./OrderPage/OrderPage";
import {
  ContentContainer,
  Main,
  NavMenu,
  PageContainer,
} from "./CashierPageElements";
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

      <ContentContainer>
        <SideBar></SideBar>
        <PageContainer>
          <Routes>
            <Route path="/" element={<MenuPage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </PageContainer>
      </ContentContainer>
    </Main>
  );
}

export default CashierPage;
