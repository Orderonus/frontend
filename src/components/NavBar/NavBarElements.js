import styled from "styled-components";
import { Colors } from "../../Theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
`;

export const Nav = styled.nav`
  font-size: 18px;
  position: sticky;
  top: 0;
  z-index: 999;
  height: 50px;
  background-color: ${Colors.white};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  ${Container};
`;

export const NavLogo = styled(Link)`
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

export const NavIcon = styled.image`
  margin-right: 0.8rem;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const MenuIcon = styled.div`
  /* display: none; */
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const MenuItem = styled.li`
  list-style: none;
  height: 80px;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${Colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 100%;
  transition: all 0.2s ease;

  &:hover {
    filter: brightness(80%);
  }
`;
