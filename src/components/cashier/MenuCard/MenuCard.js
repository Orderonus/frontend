import React from "react";
import {
  MenuCardContainer,
  MenuCardLabel,
  MenuCardImage,
  MenuCardDesc,
} from "./MenuCardElements";

function MenuCard({ name, imageUrl, price, description, isAvailable }) {
  return (
    <MenuCardContainer isAvailable={isAvailable}>
      <MenuCardImage />
      <MenuCardLabel>
        <div>{name}</div>
        <div>${price.toFixed(2)}</div>
      </MenuCardLabel>
      <MenuCardDesc>{isAvailable ? description : "Out of Stock!"}</MenuCardDesc>
    </MenuCardContainer>
  );
}

export default MenuCard;
