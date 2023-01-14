import React from "react";
import {
  Box,
  ButtonContainer,
  ContentContainer,
  OrangeContainer,
  WhiteContainer,
  Title,
  SectionContainer,
  ListBox,
  ListColumn,
  ListItem,
} from "./CartPageElements";
import { BtnSecondary } from "../../../AppComponents";

function CartPage() {
  const orders = {
    "Ramen": {
      "price": 20,
      "quantity": 2,
      "modifiers": ["Add egg", "Add noodles"],
    },
    "Fried Rice": {
      "price": 10,
      "quantity": 15,
      "modifiers": ["Less spicy"],
    },
  };

  return (
    <ContentContainer>
      <OrangeContainer>
        <WhiteContainer>
          <SectionContainer flex={2}>
            <Title>Order Summary</Title>
            {Object.entries(orders).map(([key, value]) => (
              <ListBox>
                <ListColumn flex={3}>
                  <div style={{ padding: "1rem 0" }}>
                    {key}
                    <br />
                    {"" + value.modifiers}
                  </div>
                </ListColumn>
                <ListColumn flex={1}>{`${value.quantity} pc`}</ListColumn>
                <ListColumn flex={1}>{value.price}</ListColumn>
              </ListBox>
            ))}
          </SectionContainer>
          <SectionContainer flex={1}>
            <Title>Price Summary</Title>
            <ListBox>
              <ListColumn flex={3}>1</ListColumn>
              <ListColumn flex={1}>1</ListColumn>
            </ListBox>
          </SectionContainer>
        </WhiteContainer>
        <ButtonContainer>
          <BtnSecondary>Back</BtnSecondary>
          <BtnSecondary>Add</BtnSecondary>
        </ButtonContainer>
      </OrangeContainer>
    </ContentContainer>
  );
}

export default CartPage;
