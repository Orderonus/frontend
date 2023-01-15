import styled from "styled-components";
import { Colors } from "../../../Theme";

export const MenuCardButton = styled.button`
  border: none;
  background-color: ${(props) =>
    props.isAvailable ? Colors.primary : Colors.grey};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 15px;
  height: 20rem;
`;

export const MenuCardImage = styled.image`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 56.25%;
`;

export const MenuCardLabel = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const MenuCardDesc = styled.div`
  font-size: 1.5rem;
  color: ${Colors.white};
  text-align: left;
`;
