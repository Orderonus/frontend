import styled from "styled-components";
import { Colors } from "../../Theme";

export const Main = styled.div`
  background-color: ${Colors.white};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-x: auto;
`;

export const OrderContainer = styled.div`
  background-color: ${Colors.white};
  display: flex;
  height: 100%;
  width: min-content;
  justify-content: space-around;
  align-items: center;
`;
