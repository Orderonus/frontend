import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/cashier/SideBar/SideBar";
import MenuCard from "../../components/cashier/MenuCard/MenuCard";

import {
  ContentContainer,
  Main,
  NavMenu,
  MenuCards,
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
        <SideBar>Hi</SideBar>
        <MenuCards>
          {[...Array(7)].map((i) => (
            <MenuCard
              key={i}
              name="Ramen"
              imageUrl="https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=0.903xw:0.760xh;0.0297xw,0.0123xh&resize=480:*"
              price={20}
              description="A Tasty Treat for Your Everyday Eat"
              isAvailable={true}
            />
          ))}
        </MenuCards>
      </ContentContainer>
    </Main>
  );
}

export default CashierPage;
