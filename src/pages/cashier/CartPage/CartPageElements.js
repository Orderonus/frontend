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
  max-height: 90%;
  width: 100%;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background: ${Colors.white};
  box-sizing: border-box;
  flex-direction: row;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const ListBox = styled.div`
  width: 100%;
  height: max-content;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  margin-bottom: 1rem;
  font-size: 1.5rem;
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

export const ScrollContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow-y: scroll;
`;
