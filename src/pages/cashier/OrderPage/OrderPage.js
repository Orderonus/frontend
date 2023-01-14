import React from "react";
import {
  Box,
  ButtonContainer,
  ContentContainer,
  OrangeContainer,
  WhiteContainer,
  Title,
  FoodImage,
} from "./OrderPageElements";
import { BtnSecondary } from "../../../AppComponents";

modifiers = {
  "Add egg": 0.5,
  "Add noodles": 1,
  "Add meat": 1,
  "Less spicy": 0,
};

function OrderPage() {
  return (
    <ContentContainer>
      <OrangeContainer>
        <WhiteContainer>
          {/* <Box>
            <Title>Ramen</Title>
            <FoodImage />
          </Box> */}

          <Box>
            <Title>Modifiers</Title>
          </Box>
        </WhiteContainer>
        <ButtonContainer>
          <BtnSecondary>Back</BtnSecondary>
          <BtnSecondary>Add</BtnSecondary>
        </ButtonContainer>
      </OrangeContainer>
    </ContentContainer>
  );
}

export default OrderPage;
