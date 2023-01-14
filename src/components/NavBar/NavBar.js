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

function NavBar(props) {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon>
            <img src={Logo} width={150} />
          </NavIcon>
        </NavLogo>
        <MenuIcon>{props.children}</MenuIcon>

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
