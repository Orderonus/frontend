import styled from "styled-components";
import { Colors } from "../../../Theme";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
`;

export const StoreInfoHeader = styled.div`
  background: ${Colors.lightgrey};
  width: 100%;
  box-sizing: border-box;
  padding: 2rem;
`;

export const StoreInfoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const StoreInfoDesc = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
`;
