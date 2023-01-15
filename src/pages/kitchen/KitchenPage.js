import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/shared/NavBar/NavBar";
import {
  MenuLink,
  TabMenuLink,
} from "../../components/shared/NavBar/NavBarElements";
import { ContentContainer, Main } from "./KitchenPageElements";
import PendingPage from "./PendingPage/PendingPage";
import CompletedPage from "./CompletedPage/CompletedPage";
import { Roles } from "../../utils/Enums";

function KitchenPage() {
  return (
    <Main>
      <NavBar role={Roles.Kitchen}>
        <TabMenuLink to="/kitchen">Pending</TabMenuLink>
        <TabMenuLink to="/kitchen/completed">Completed</TabMenuLink>
      </NavBar>

      <ContentContainer>
        <Routes>
          <Route path="/" element={<PendingPage />} />
          <Route path="/completed" element={<CompletedPage />} />
        </Routes>
      </ContentContainer>
    </Main>
  );
}

export default KitchenPage;
