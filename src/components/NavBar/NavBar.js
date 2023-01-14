import React from "react";
import Logo from "../../assets/Logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MenuIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./NavBarElements";

function NavBar() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon>
            <img src={Logo} />
          </NavIcon>
        </NavLogo>
        <MenuIcon>MenuIcon</MenuIcon>

        <Menu>
          <MenuItem>
            <MenuLink to="/profile">Profile</MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
