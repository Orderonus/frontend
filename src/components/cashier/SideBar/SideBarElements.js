import styled from "styled-components";
import { Colors } from "../../../Theme";

export const SideBarContainer = styled.div`
  flex: 1;
  background-color: ${Colors.black};
  width: 100%;
  height: 100%;
`;

export const BtnGroup = styled.div`
  display: flex;
  flex-direction: column;
  height: 85%;
`;

export const RegBtnContainer = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.grey};
`;

export const RegBtnContainerSelected = styled.div`
  height: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.secondary};
`;

export const CartButton = styled.button`
  height: 15%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${Colors.primary};
`;
