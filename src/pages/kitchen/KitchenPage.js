import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Main } from "./KitchenPageElements";
import { MenuLink } from "../../components/NavBar/NavBarElements";
import { OrderContainer } from "./KitchenPageElements";
import OrderCard from "./OrderCard/OrderCard";

function KitchenPage() {
  return (
    <Main>
      <NavBar>
        <MenuLink to="/kitchen/pending">Pending</MenuLink>
        <MenuLink to="/kitchen/completed">Completed</MenuLink>
      </NavBar>

      <OrderContainer>
        <OrderCard 
          id={2321}
          time={new Date()}
          items={[{
            "qty": 2,
            "name": "Niku Udon",
            "modifiers": ["Add noodles", "Less oil"],
          }]} 
          // append any comments to modifiers array
          type={"Open"}
        />
        
      </OrderContainer>
    </Main>
  );
}

export default KitchenPage;

