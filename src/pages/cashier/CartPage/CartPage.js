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
  ScrollContainer,
} from "./CartPageElements";
import { BtnSecondary } from "../../../AppComponents";

function CartPage() {
  const orders = [
    {
      "name": "Ramen",
      "price": 20,
      "quantity": 2,
      "modifiers": ["Add egg", "Add noodles"],
    },
    {
      "name": "Fried Rice",
      "price": 10,
      "quantity": 15,
      "modifiers": ["Less spicy"],
    },
  ];

  const subtotal = orders
    .map((order) => order.price * order.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  const serviceCharge = subtotal * 0.1;

  const gst = serviceCharge * 0.08;

  const total = subtotal + serviceCharge + gst;

  return (
    <ContentContainer>
      <OrangeContainer>
        <WhiteContainer>
          <SectionContainer flex={3}>
            <Title>Order Summary</Title>
            <ScrollContainer>
              {Object.entries(orders).map(([key, value]) => (
                <ListBox>
                  <ListColumn flex={3}>
                    <div>
                      {value.name}
                      <br />
                      {value.modifiers.map((modifier) => (
                        <li>{modifier}</li>
                      ))}
                    </div>
                  </ListColumn>
                  <ListColumn flex={1}>{`${value.quantity} pc`}</ListColumn>
                  <ListColumn flex={1}>{`$${value.price.toFixed(
                    2
                  )}`}</ListColumn>
                </ListBox>
              ))}
            </ScrollContainer>
          </SectionContainer>
          <SectionContainer flex={2}>
            <Title>Price Summary</Title>
            {[
              ["Subtotal", subtotal],
              ["Service Charge", serviceCharge],
              ["GST", gst],
              ["Total", total],
            ].map((item) => (
              <ListBox>
                <ListColumn flex={3}>{item[0]}</ListColumn>
                <ListColumn flex={1}>{`$${item[1].toFixed(2)}`}</ListColumn>
              </ListBox>
            ))}
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
