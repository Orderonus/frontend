import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ContentContainer, Main, NavMenu } from "./CashierPageElements";
import QueueIcon from "../../assets/Queue Icon.png";
import SideBar from "../../components/SideBar/SideBar";
import MenuCard from "../../components/MenuCard/MenuCard";

function CashierPage() {
  const [numOrdersPhysical, setNumOrdersPhysical] = useState(0);
  const [numOrdersOnline, setNumOrdersOnline] = useState(0);

  return (
    <Main>
      <NavBar>
        <NavMenu>
          <img src={QueueIcon} width={35} />
          <div>
            Physical orders: <b>0</b>, Online orders: <b>0</b>
          </div>
        </NavMenu>
      </NavBar>

      <ContentContainer>
        <SideBar>Hi</SideBar>
        <div>
          <MenuCard
            name="Ramen"
            imageUrl="https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=0.903xw:0.760xh;0.0297xw,0.0123xh&resize=480:*"
            price={20}
            description="A Tasty Treat for Your Everyday Eat"
          />
        </div>
      </ContentContainer>
    </Main>
  );
}

export default CashierPage;
