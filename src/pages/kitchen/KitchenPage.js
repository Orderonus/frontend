import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Main, NavMenu } from "./KitchenPageElements";
import { MenuLink } from "../../components/NavBar/NavBarElements";
import { OrderContainer, OrderCard } from "./KitchenPageElements";

function KitchenPage() {
  return (
    <Main>
      <NavBar>
        <MenuLink to="/kitchen/pending">Pending</MenuLink>
        <MenuLink to="/kitchen/completed">Completed</MenuLink>
      </NavBar>

      <OrderContainer>
          <OrderCard>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </OrderCard>
          <OrderCard>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </OrderCard>
          <OrderCard>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </OrderCard>
          <OrderCard>
            <p>test</p>
            <p>test</p>
            <p>test</p>
            <p>test</p>
          </OrderCard>
      </OrderContainer>
    </Main>
  );
}

export default KitchenPage;

