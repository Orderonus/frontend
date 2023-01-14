import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { ContentContainer, Main } from "./CashierPageElements";
import { NavMenu } from "../../AppComponents";
import QueueIcon from "../../assets/Queue Icon.png";
import SideBar from "../../components/SideBar/SideBar";

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
      </ContentContainer>
    </Main>
  );
}

export default CashierPage;
