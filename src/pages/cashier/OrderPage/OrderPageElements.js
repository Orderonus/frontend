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
`;

export const Box = styled.div`
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const CheckboxItem = styled.div`
  margin: 1rem 0;
`;

export const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Input = styled.input`
  border: 3px solid ${Colors.primary};
  background: ${Colors.white};
  border-radius: 15px;
  display: block;
  font-size: 1.2rem;
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
`;

export const FoodImage = styled.image`
  background-image: url("http://172.31.47.170:8000/media/dishes/download.jfif");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 56.25%;
`;

//
export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 3px solid red;
  flex: 1;
`;
