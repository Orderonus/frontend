import React from "react";
import { BtnGroup, CartBtnContainer, RegBtnContainer, RegBtnContainerSelected, SideBarContainer } from "./SideBarElements";
import CartLogo from "../../../cart.png"
import RiceLogo from "../../../rice.png"
import DrinkLogo from "../../../drink.png"

function SideBar() {
  return (
    <SideBarContainer>
      <BtnGroup>
        <RegBtnContainerSelected>
         <img src={RiceLogo} height={80} width={80}/>
        </RegBtnContainerSelected>
        <RegBtnContainer>
         <img src={DrinkLogo} height={80} width={80}/>
        </RegBtnContainer>
      </BtnGroup>
      <CartBtnContainer>
        <img src={CartLogo} height={80} width={80}/>
      </CartBtnContainer>
    </SideBarContainer>
  );
}

export default SideBar;
