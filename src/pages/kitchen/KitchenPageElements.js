import styled from "styled-components";
import { Colors } from "../../Theme";

export const Main = styled.div`
  background-color: ${Colors.white};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
`;

export const OrderContainer = styled.div`
  height: 100%;
  width: min-content;
  display: grid;
  overflow-x: scroll;
`;

export const OrderCard = styled.div`
  background-color: ${Colors.primary};
  width: 13rem;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
  grid-row: 1;
`;
