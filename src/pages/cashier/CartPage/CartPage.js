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
import { ModifierLookup } from "../OrderPage/OrderPage";
import { MenuLookup } from "../MenuPage/MenuPage";

function CartPage({ orders }) {
  const subtotal = orders
    .map((order) => {
      const dish = MenuLookup.get(order.id);
      const base_price = dish.price;
      const addon_price = order.modifiers
        .map((mod) => ModifierLookup.get(parseInt(mod)).price)
        .reduce((acc, curr) => acc + curr, 0);
      console.log(
        base_price,
        typeof base_price,
        addon_price,
        typeof addon_price
      );
      return (base_price + addon_price) * order.quantity;
    })
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
              {orders.map(({ id, modifiers, quantity, other_comments }) => {
                const menuItem = MenuLookup.get(id);
                return (
                  <ListBox>
                    <ListColumn flex={3}>
                      <div>
                        {menuItem.name}
                        <br />
                        {modifiers.map((mod) => {
                          const modifier = ModifierLookup.get(parseInt(mod));
                          return (
                            <li>
                              {modifier.description}
                              {` \$(${modifier.price.toFixed(2)})`}
                            </li>
                          );
                        })}
                        {other_comments.length > 0 ? (
                          <li>{other_comments}</li>
                        ) : (
                          ""
                        )}
                      </div>
                    </ListColumn>
                    <ListColumn flex={1}>{`${quantity} pc`}</ListColumn>
                    <ListColumn flex={1}>{`$${(
                      menuItem.price +
                      modifiers
                        .map((mod) => ModifierLookup.get(parseInt(mod)).price)
                        .reduce((acc, curr) => acc + curr, 0)
                    ).toFixed(2)}`}</ListColumn>
                  </ListBox>
                );
              })}
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
