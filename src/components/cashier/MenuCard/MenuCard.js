import React from "react";
import {
  MenuCardButton,
  MenuCardLabel,
  MenuCardImage,
  MenuCardDesc,
} from "./MenuCardElements";

function MenuCard({ name, imageUrl, price, description, isAvailable }) {
  return (
    <MenuCardButton isAvailable={isAvailable}>
      <div
        style={{
          width: "100%",
          height: "10rem",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <img src={imageUrl} style={{ width: "100%", height: "100%" }} />
      </div>
      <MenuCardLabel>
        <div>{name}</div>
        <div>${price.toFixed(2)}</div>
      </MenuCardLabel>
      <MenuCardDesc>{isAvailable ? description : "Out of Stock!"}</MenuCardDesc>
    </MenuCardButton>
  );
}

export default MenuCard;
