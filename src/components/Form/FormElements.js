import styled from "styled-components";
import { Colors } from "../../Theme";

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  justify-content: center;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const FormInput = styled.input`
  border: 1px solid ${Colors.gray};
  border-radius: 0.25rem;
  display: block;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 100%;
`;

export const FormTextField = styled.textarea`
  border: 1px solid ${Colors.gray};
  border-radius: 0.25rem;
  display: block;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 100%;
  height: 10rem;
`;
