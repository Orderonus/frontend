import React from "react";
import { AlertBox } from "../../../components/AlertBox/AlertBox";
import { StoreForm } from "../../../components/Form/Form";
import {
  ContentContainer,
  StoreInfoHeader,
  StoreInfoTitle,
  StoreInfoDesc,
} from "./StorePageElements";

export const StorePage = () => {
  return (
    <ContentContainer>
      <StoreInfoHeader>
        <StoreInfoTitle>Store Information</StoreInfoTitle>
        <StoreInfoDesc>Please fill in details about your store.</StoreInfoDesc>
      </StoreInfoHeader>
      {/* <StoreForm /> */}
    </ContentContainer>
  );
};
