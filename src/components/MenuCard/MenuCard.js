import React from "react";
import {
  MenuCardContainer,
  MenuCardLabel,
  MenuCardImage,
  MenuCardDesc,
} from "./MenuCardElements";

function MenuCard({ name, imageUrl, price, description }) {
  return (
    <MenuCardContainer>
      <MenuCardImage />
      <MenuCardLabel>
        <div>{name}</div>
        <div>${price.toFixed(2)}</div>
      </MenuCardLabel>
      <MenuCardDesc>{description}</MenuCardDesc>
    </MenuCardContainer>
  );
}

export default MenuCard;
