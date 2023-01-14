import styled from "styled-components";
import { Colors } from "../../Theme";


export const Main = styled.div`
  background-color: ${Colors.white};
  height: 100%;
`;

export const OrderContainer = styled.div`
  display: flex;
  height: 85%;
  width: min-content;
  justify-content: space-around;
  padding: 2rem;
  overflow-x: auto;
`;
