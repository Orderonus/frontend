import React from "react";
import {
  FormContainer,
  FormInput,
  FormLabel,
  FormSection,
  FormTextField,
} from "./FormElements";

export const StoreForm = ({ action_url, method = "post" }) => {
  return (
    <FormContainer method={method} action={action_url}>
      <FormSection>
        <FormLabel>Name:</FormLabel>
        <FormInput type="text" placeholder="Store name" />
      </FormSection>
      <FormSection>
        <FormLabel>Image/Icon:</FormLabel>
        <FormInput type="file" accept="image/jpg, image/png" />
      </FormSection>
      <FormSection>
        <FormLabel>Description:</FormLabel>
        <FormTextField placeholder="Description" />
      </FormSection>
    </FormContainer>
  );
};
