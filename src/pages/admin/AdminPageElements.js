import React from "react";
import styled from "styled-components";
import { Colors } from "../../Theme";
import { MenuLink } from "../../components/NavBar/NavBarElements";
import NavBar from "../../components/NavBar/NavBar";

export const Main = styled.div`
  background-color: ${Colors.white};
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const AdminMenuLink = styled(MenuLink)`
  color: ${Colors.black};
  display: inline-block;
  padding: 1rem;
`;

export const AdminNav = styled(NavBar)``;
