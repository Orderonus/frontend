import React from "react";
import { AlertBox } from "../../../components/AlertBox/AlertBox";
import { StoreForm } from "../../../components/Form/Form";
import { ContentContainer } from "./StorePageElements";

export const StorePage = () => {
  return (
    <ContentContainer>
      <AlertBox>
        <div>
          <p>
            <b>Store Info</b>
          </p>
        </div>
      </AlertBox>
      <StoreForm />
    </ContentContainer>
  );
};
