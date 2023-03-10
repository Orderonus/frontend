import React, { useState } from "react";
import Logo from "../../../assets/Logo.png";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Menu,
  MenuItem,
  MenuLink,
} from "./NavBarElements";
import ProfileDisplay from "../ProfileDisplay/ProfileDisplay";

function NavBar(props) {
  const [username, setUsername] = useState("Sarah Tan");
  const [role, setRole] = useState(props.role);
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <NavIcon>
            <img src={Logo} alt="Logo" width={150} />
          </NavIcon>
        </NavLogo>
        <div>{props.children}</div>

        <Menu>
          <MenuItem>
            <MenuLink to="/profile">
              <ProfileDisplay username={username} role={role} />
            </MenuLink>
          </MenuItem>
        </Menu>
      </NavbarContainer>
    </Nav>
  );
}

export default NavBar;
