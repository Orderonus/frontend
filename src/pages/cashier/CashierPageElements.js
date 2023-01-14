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
  flex-direction: row;
  height: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const MenuCards = styled.div`
  background: pink;
  width: 100%;
  height: auto;
  padding: 1rem;

  display: grid;
  grid-gap: 1rem;
  grid-template-columns: auto auto auto;
`;
