import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { NavMenu } from "../../AppComponents";
import { MenuLink } from "../../components/NavBar/NavBarElements";
import {
  Main,
  ContentContainer,
  OrderContainer,
  OrderCard,
} from "./KitchenPageElements";

function KitchenPage() {
  return (
    <Main>
      <NavBar>
        <NavMenu>
          <MenuLink to="/kitchen/pending">Pending</MenuLink>
          <MenuLink to="/kitchen/completed">Completed</MenuLink>
        </NavMenu>
      </NavBar>

      <ContentContainer>
        <OrderContainer>
          {[...Array(7)].map((i) => (
            <OrderCard>
              <p>test</p>
              <p>test</p>
              <p>test</p>
              <p>test</p>
            </OrderCard>
          ))}
        </OrderContainer>
      </ContentContainer>
    </Main>
  );
}

export default KitchenPage;
