import React, { useState } from "react";
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
import ProfileDisplay from "../ProfileDisplay/ProfileDisplay";

function NavBar(props) {
  const [username, setUsername] = useState("Sarah Tan");
  const [role, setRole] = useState("Cashier");
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
            <MenuLink to="/profile">
              <ProfileDisplay />
            </MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
