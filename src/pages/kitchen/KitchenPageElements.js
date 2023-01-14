import styled from "styled-components";
import { Colors } from "../../Theme";


export const Main = styled.div`
  background-color: ${Colors.white};
  height: 37rem;
`;

export const OrderContainer = styled.div`
  display: flex;
  height: 85%;
  width: min-content;
  justify-content: space-around;
  padding: 2rem;
  overflow-x: auto;
`;

export const OrderCard = styled.div`
  background-color: ${Colors.primary};
  width: 13rem;
  border-radius: 15px;
  padding: 1rem;
  margin: 1rem;
`;
