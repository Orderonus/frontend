import React, { useState } from "react";
import {
  Box,
  ButtonContainer,
  ContentContainer,
  OrangeContainer,
  WhiteContainer,
  Title,
  Input,
  FoodImage,
  CheckboxItem,
  CounterContainer,
  TopSectionContainer,
  BtmSectionContainer,
} from "./OrderPageElements";
import { BtnSecondary } from "../../../AppComponents";
import Form from "react-bootstrap/Form";
import IncrementIcon from "../../../assets/Increment.png";
import DecrementIcon from "../../../assets/Decrement.png";

function OrderPage() {
  const modifiers = {
    "Add egg": 0.5,
    "Add noodles": 1,
    "Add meat": 1,
    "Less spicy": 0,
  };

  const [quantity, setQuantity] = useState(0);

  return (
    <ContentContainer>
      <OrangeContainer>
        <WhiteContainer>
          <TopSectionContainer>
            <Box>
              <Title>Ramen</Title>
              <FoodImage />
            </Box>

            <Box>
              <Title>Modifiers</Title>
              <Form>
                {Object.entries(modifiers).map(([key, value]) => (
                  <CheckboxItem>
                    <Form.Check
                      type={"checkbox"}
                      id={key}
                      label={`${key} ($${value.toFixed(2)})`}
                    />
                  </CheckboxItem>
                ))}
              </Form>
            </Box>
          </TopSectionContainer>
          <BtmSectionContainer>
            <Box>
              <Title>Quantity</Title>
              <CounterContainer>
                <img src={IncrementIcon} alt="Increment" />
                {quantity}
                <img src={DecrementIcon} alt="Decrement" />
              </CounterContainer>
            </Box>

            <Box>
              <Title>Comments</Title>
              <Input />
            </Box>
          </BtmSectionContainer>
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
