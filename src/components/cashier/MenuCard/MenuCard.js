import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  MenuCardButton,
  MenuCardLabel,
  MenuCardImage,
  MenuCardDesc,
} from "./MenuCardElements";

function MenuCard(props) {
  const navigate = useNavigate();

  function selectCard() {
    console.log("Select " + props.id);
    navigate(`/cashier/order/${props.id}`, {
      state: props,
    });
  }

  return (
    <MenuCardButton isAvailable={props.isAvailable} onClick={selectCard}>
      <div
        style={{
          width: "100%",
          height: "10rem",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <img src={props.imageUrl} style={{ width: "100%", height: "100%" }} />
      </div>
      <MenuCardLabel>
        <div>{props.name}</div>
        <div>${props.price.toFixed(2)}</div>
      </MenuCardLabel>
      <MenuCardDesc>
        {props.isAvailable ? props.description : "Out of Stock!"}
      </MenuCardDesc>
    </MenuCardButton>
  );
}

export default MenuCard;
