import React from "react";
import {
  BtnGroup,
  CartButton,
  RegBtnContainer,
  RegBtnContainerSelected,
  SideBarContainer,
} from "./SideBarElements";
import CartLogo from "../../../cart.png";
import RiceLogo from "../../../rice.png";
import DrinkLogo from "../../../drink.png";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  const openMenu = () => {
    navigate(`/cashier/`);
  };

  const openCart = () => {
    navigate(`/cashier/cart`);
  };

  return (
    <SideBarContainer>
      <BtnGroup>
        <RegBtnContainerSelected onClick={openMenu}>
          <img src={RiceLogo} height={80} width={80} />
        </RegBtnContainerSelected>
        <RegBtnContainer>
          <img src={DrinkLogo} height={80} width={80} />
        </RegBtnContainer>
      </BtnGroup>
      <CartButton onClick={openCart}>
        <img src={CartLogo} height={80} width={80} />
      </CartButton>
    </SideBarContainer>
  );
}

export default SideBar;
