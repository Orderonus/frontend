import React from "react";
import MenuCard from "../../../components/cashier/MenuCard/MenuCard";
import { ContentContainer, MenuCards } from "./MenuPageElements";

export const MenuLookup = new Map([
  [
    1,
    {
      id: 1,
      name: "Ramen",
      imageUrl:
        "https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2018/04/shoyu-ramen-1.jpg",
      price: 20,
      description: "Delicious noodles with aromatic broth",
      isAvailable: true,
    },
  ],
  [
    2,
    {
      id: 2,
      name: "Fried Rice",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/delish-fried-rice-020-1543875572.jpg",
      price: 30,
      description: "Uncle Roger's egg fried rice",
      isAvailable: true,
    },
  ],
  [
    3,
    {
      id: 3,
      name: "Pasta",
      imageUrl:
        "https://sifu.unileversolutions.com/image/en-PH/recipe-topvisual/2/1260-709/pasta-with-salted-egg-cream-sauce-recipe-50319758.jpg",
      price: 50,
      description: "Impasta",
      isAvailable: true,
    },
  ],
]);

function MenuPage() {
  return (
    <ContentContainer>
      <MenuCards>
        {Array.from(MenuLookup.values()).map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.price}
            description={item.description}
            isAvailable={item.isAvailable}
          />
        ))}
      </MenuCards>
    </ContentContainer>
  );
}

export default MenuPage;
