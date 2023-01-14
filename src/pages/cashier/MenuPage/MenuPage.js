import React from "react";
import SideBar from "../../../components/cashier/SideBar/SideBar";
import MenuCard from "../../../components/cashier/MenuCard/MenuCard";
import { ContentContainer, MenuCards } from "./MenuPageElements";

function MenuPage() {
  return (
    <ContentContainer>
      <SideBar>Hi</SideBar>
      <MenuCards>
        {[...Array(7)].map((i) => (
          <MenuCard
            key={i}
            name="Ramen"
            imageUrl="https://hips.hearstapps.com/hmg-prod/images/190208-delish-ramen-horizontal-093-1550096715.jpg?crop=0.903xw:0.760xh;0.0297xw,0.0123xh&resize=480:*"
            price={20}
            description="A Tasty Treat for Your Everyday Eat"
            isAvailable={true}
          />
        ))}
      </MenuCards>
    </ContentContainer>
  );
}

export default MenuPage;
