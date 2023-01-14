import styled from "styled-components";
import { Colors } from "../../Theme";

export const StoreFormContainer = styled.form`
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
`;

export const StoreFormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const StoreFormSection = styled.div`
  padding-bottom: 2rem;

  &:last-child {
    padding-bottom: 0;
  }
`;

export const StoreFormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StoreFormInput = styled.input`
  border: 1px solid ${Colors.gray};
  border-radius: 0.25rem;
  display: block;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
`;

export const StoreFormTextField = styled.textarea`
  border: 1px solid ${Colors.gray};
  border-radius: 0.25rem;
  display: block;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  height: 10rem;
`;
