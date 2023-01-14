import React from "react";
import {
  StoreFormContainer,
  StoreFormInput,
  StoreFormLabel,
  StoreFormSection,
  StoreFormTextField,
} from "./StoreFormElements";

export const StoreForm = ({ action_url, method = "post" }) => {
  return (
    <StoreFormContainer method={method} action={action_url}>
      <StoreFormSection>
        <StoreFormLabel>Name:</StoreFormLabel>
        <StoreFormInput type="text" placeholder="Store name" />
      </StoreFormSection>
      <StoreFormSection>
        <StoreFormLabel>Image/Icon:</StoreFormLabel>
        <StoreFormInput type="file" accept="image/jpg, image/png" />
      </StoreFormSection>
      <StoreFormSection>
        <StoreFormLabel>Description:</StoreFormLabel>
        <StoreFormTextField placeholder="Description" />
      </StoreFormSection>
    </StoreFormContainer>
  );
};
