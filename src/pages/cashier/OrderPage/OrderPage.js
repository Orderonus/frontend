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
import { useLocation, useNavigate } from "react-router-dom";

function OrderPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const data = [
    { id: 1, description: "Add egg", price: 0.5 },
    { id: 2, description: "Add noodles", price: 1 },
    { id: 3, description: "Add meat", price: 1 },
    { id: 4, description: "Add spicy", price: 0 },
  ];

  const [modifiers, setModifiers] = useState([]);

  const [quantity, setQuantity] = useState(0);

  const [comment, setComment] = useState("");

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleModifierChange = (event) => {
    const id = event.target.value;
    if (event.target.checked) {
      setModifiers((modifiers) => [...modifiers, id]);
    } else {
      setModifiers(modifiers.filter((item) => item.id !== id));
    }
  };

  const incrementCounter = () => {
    setQuantity(quantity + 1);
  };

  const decrementCounter = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const submitForm = () => {
    console.log(`Quantity: ${quantity}`);
    console.log(`Modifiers: ${modifiers}`);
    console.log(`Comments: ${comment}`);

    navigate("/cashier/");
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
                {data.map((item) => (
                  <CheckboxItem key={item.id}>
                    <Form.Check
                      type={"checkbox"}
                      id={item.id}
                      value={item.id}
                      label={`${item.description} ($${item.price.toFixed(2)})`}
                      onChange={handleModifierChange}
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
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={decrementCounter}
                >
                  <img src={DecrementIcon} alt="Decrement" />
                </button>
                {quantity}
                <button
                  style={{ border: "none", background: "none" }}
                  onClick={incrementCounter}
                >
                  <img src={IncrementIcon} alt="Increment" />
                </button>
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
          <BtnSecondary onClick={submitForm}>Add</BtnSecondary>
        </ButtonContainer>
      </OrangeContainer>
    </ContentContainer>
  );
}

export default OrderPage;
