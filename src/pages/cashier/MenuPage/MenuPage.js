import React from "react";
import MenuCard from "../../../components/cashier/MenuCard/MenuCard";
import { ContentContainer, MenuCards } from "./MenuPageElements";

function MenuPage() {
  return (
    <ContentContainer>
      <MenuCards>
        {[...Array(7)].map((i) => (
          <MenuCard
            key={i}
            name="Ramen"
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
