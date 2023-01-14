import styled from "styled-components";
import { Colors } from "../../../Theme";

export const ContentContainer = styled.div`
  height: 100%;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  border: 1px solid blue;
  box-sizing: border-box;
  padding: 10px;
  text-align: center;
  font-family: helvetica, sans-serif;
  font-size: 18px;
  min-height: 3000rem;
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
