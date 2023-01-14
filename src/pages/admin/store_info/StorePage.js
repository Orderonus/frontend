import React from "react";
import { StoreForm } from "../../../components/StoreForm/StoreForm";
import {
  ContentContainer,
  StoreInfoHeader,
  StoreInfoTitle,
  StoreInfoDesc,
} from "./StorePageElements";
import { BtnPrimary } from "../../../AppComponents";

export const StorePage = () => {
  return (
    <ContentContainer>
      <StoreInfoHeader>
        <StoreInfoTitle>Store Information</StoreInfoTitle>
        <StoreInfoDesc>Please fill in details about your store.</StoreInfoDesc>
      </StoreInfoHeader>
      <StoreForm />
      <BtnPrimary>Submit</BtnPrimary>
    </ContentContainer>
  );
};
