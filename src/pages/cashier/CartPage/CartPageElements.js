import styled from "styled-components";
import { Colors } from "../../../Theme";

export const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  box-sizing: border-box;
`;

export const OrangeContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  width: 100%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: ${Colors.primary};
  padding: 2rem;
  box-sizing: border-box;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const WhiteContainer = styled.div`
  display: flex;
  height: 100%;
  max-height: 100%;
  width: 100%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  box-sizing: border-box;
  flex-direction: row;
`;

//
export const Box = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 2rem;
  background: purple;
  height: 100%;
  weight: 100%;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ListBox = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  margin: 1rem 0;
`;

export const ListColumn = styled.div`
  height: 100%;
  width: 100%;
  flex: ${(props) => props.flex};
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  height: 100%;
  flex: 1;
  padding: 2rem;
  box-sizing: border-box;
  flex: ${(props) => props.flex};
`;
