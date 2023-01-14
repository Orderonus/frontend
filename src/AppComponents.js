import styled from "styled-components";
import { Colors } from "./Theme";

export const StyledContainer = styled.div`
  background-color: ${Colors.black};
  height: 100vh;
  overflow: scroll;
`;

export const BtnPrimary = styled.button`
  color: ${Colors.white};
  background-color: ${Colors.primary};
  border: none;
  border-radius: 20px;
  min-width: 6rem;
  height: auto;
  padding: 0.2rem 2rem;
  font-size: 1.5rem;
`;

export const BtnSecondary = styled.button`
  color: ${Colors.black};
  background-color: ${Colors.white};
  border: none;
  border-radius: 20px;
  min-width: 6rem;
  height: auto;
  padding: 0.2rem 2rem;
  font-size: 1.5rem;
`;