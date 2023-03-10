import React from "react";
import { Roles } from "../../../utils/Enums";
import AdminIcon from "../../../assets/Admin Icon.png";
import CashierIcon from "../../../assets/Cashier Icon.png";
import KitchenIcon from "../../../assets/Kitchen Icon.png";
import ProfileIcon from "../../../assets/Profile Icon.png";
import { Display, DisplayText } from "./ProfileDisplayElements";

function ProfileDisplay({ username, role }) {
  function getIcon(role) {
    switch (role) {
      case Roles.Admin:
        return <img src={AdminIcon} alt="Admin" width={30} />;
      case Roles.Cashier:
        return <img src={CashierIcon} alt="Cashier" width={30} />;
      case Roles.Kitchen:
        return <img src={KitchenIcon} alt="Kitchen" width={30} />;
      case Roles.Profile:
        return <img src={ProfileIcon} alt="Profile" width={30} />;
      default:
        break;
    }
  }

  return (
    <Display>
      {getIcon(role)}
      <DisplayText>{username}</DisplayText>
    </Display>
  );
}

export default ProfileDisplay;
