import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Main, NavMenu } from "./CashierPageElements";
import QueueIcon from "../../assets/Queue Icon.png";

function CashierPage() {
  // states
  const [numOrdersPhysical, setNumOrdersPhysical] = useState(0);
  const [numOrdersOnline, setNumOrdersOnline] = useState(0);

  return (
    <Main>
      <NavBar>
        <NavMenu>
          <img src={QueueIcon} width={35} />
          {/* <div>
            Pending orders: {numOrdersPhysical} Physical, {numOrdersOnline}{" "}
            Online
          </div> */}
          <div>
            Physical orders: <b>0</b>, Online orders: <b>0</b>
          </div>
        </NavMenu>
      </NavBar>
      <div>CashierPage</div>
    </Main>
  );
}

export default CashierPage;
