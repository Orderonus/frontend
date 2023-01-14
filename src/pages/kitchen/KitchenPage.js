import React from "react";
import NavBar from "../../components/shared/NavBar/NavBar";
import { MenuLink } from "../../components/shared/NavBar/NavBarElements";
import { Main, OrderContainer, TogglerDiv } from "./KitchenPageElements";
import OrderCard from "./OrderCard/OrderCard";

function KitchenPage() {
  return (
    <Main>
      <NavBar>
        <TogglerDiv>
          <MenuLink>Pending</MenuLink>
          <MenuLink>Completed</MenuLink>
        </TogglerDiv>
      </NavBar>

      <OrderContainer>
        <OrderCard 
          open={false} 
          id={2321} 
          datetime={new Date()} 
          items={[
            {"qty": 1, "name": "Shoyu Ramen", "modifiers":["Less sugar"]
          }]} />
      </OrderContainer>
    </Main>
  )
}

export default KitchenPage;
