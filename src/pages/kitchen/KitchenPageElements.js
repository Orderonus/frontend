import styled from "styled-components";
import { Colors } from "../../Theme";

export const Main = styled.div`
  background-color: ${Colors.white};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const TogglerDiv = styled.div`
  background-color: ${Colors.white};
  display: flex;
  border: 1.5px solid;
  border-color: ${Colors.primary};
  padding: 0.5rem;
  border-radius: 10px;
`;

export const OrderContainer = styled.div`
  background-color: ${Colors.white};
  display: flex;
  height: 100%;
  width: min-content;
  justify-content: space-around;
  align-items: center;
`