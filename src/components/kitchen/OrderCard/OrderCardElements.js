import styled from "styled-components";
import { Colors } from "../../../Theme";

export const CardContainer = styled.div`
  background-color: ${Colors.primary};
  height: 85%;
  width: 20rem;
  margin-left: 2rem;
  border-radius: 15px;
`

export const CardContainerDone = styled.div`
  background-color: ${Colors.white};
  border: 2px solid ${Colors.primary};
  height: 85%;
  width: 20rem;
  margin-left: 2rem;
  border-radius: 15px;
`

export const CardHeaderDiv = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-between;
`

export const CardBodyDiv = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
`

export const CardBtnDiv = styled.div`
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: start;
`
export const HeaderText = styled.p`
  font-size: 1.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${Colors.white};
`

export const HeaderTextDone = styled.p`
  font-size: 1.8rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: ${Colors.black};
`

export const BodyText = styled.p`
  font-size: 1.2rem;
  margin-left: 2rem;
`

export const BodyListItem = styled.li`
  font-size: 1.2rem;
  margin-left: 3rem;
`