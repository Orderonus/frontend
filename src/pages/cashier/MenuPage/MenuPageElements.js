import styled from "styled-components";
import { Colors } from "../../../Theme";

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

export const MenuCards = styled.div`
  width: 100%;
  max-width: 100%;
  height: auto;
  padding: 1rem;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 20rem;
  overflow: hidden;
  overflow-y: auto;
`;
