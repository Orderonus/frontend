import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../../components/shared/NavBar/NavBar";
import { MenuLink } from "../../components/shared/NavBar/NavBarElements";
import { ContentContainer, Main } from "./KitchenPageElements";
import PendingPage from "./PendingPage/PendingPage";
import CompletedPage from "./CompletedPage/CompletedPage";

function KitchenPage() {
  return (
    <Main>
      <NavBar>
        <MenuLink to="/kitchen">Pending</MenuLink>
        <MenuLink to="/kitchen/completed">Completed</MenuLink>
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
