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
  flex-direction: column;
`;

export const Box = styled.div`
  flex: 1;
  font-size: 1.2rem;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 2rem;
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
  background-image: url("https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2018/04/shoyu-ramen-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 56.25%;
`;

export const TopSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  flex: 3;
`;

export const BtmSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  width: 100%;
  flex: 1;
`;
