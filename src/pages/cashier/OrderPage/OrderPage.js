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
import { useLocation } from "react-router-dom";

function OrderPage() {
  const location = useLocation();

  const modifiers = {
    "Add egg": 0.5,
    "Add noodles": 1,
    "Add meat": 1,
    "Less spicy": 0,
  };

  const [quantity, setQuantity] = useState(0);

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  return (
    <ContentContainer>
      <OrangeContainer>
        <WhiteContainer>
          <TopSectionContainer>
            <Box>
              <Title>{location.state.name}</Title>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={location.state.imageUrl}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
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
              <Input value={comment} onChange={handleCommentChange} />
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
