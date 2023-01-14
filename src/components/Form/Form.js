import React from "react";
import { FormInput, FormLabel, FormTextField } from "./FormElements";

export const StoreForm = ({ action_url, method = "post" }) => {
  return (
    <form method={method} action={action_url}>
      <FormLabel>Name:</FormLabel>
      <FormInput type="text" placeholder="Store name" />
      <br />
      <FormLabel>Image</FormLabel>
      <FormInput type="file" accept="image/jpg, image/png" />
      <br />
      <FormLabel>Description</FormLabel>
      <FormTextField placeholder="Description" />
    </form>
  );
};
