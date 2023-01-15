import styled from "styled-components";
import { Colors } from "../../../Theme";

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const MenuCards = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
  overflow-y: scroll;

  box-sizing: border-box;
`;
