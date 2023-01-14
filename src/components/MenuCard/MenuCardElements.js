import styled from "styled-components";
import { Colors } from "../../Theme";

export const MenuCardContainer = styled.div`
  background-color: ${(props) =>
    props.isAvailable ? Colors.primary : Colors.grey};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;

export const MenuCardImage = styled.image`
  background-image: url("https://i0.wp.com/seonkyounglongest.com/wp-content/uploads/2018/04/shoyu-ramen-1.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  padding-top: 56.25%;
`;

export const MenuCardLabel = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const MenuCardDesc = styled.div`
  font-size: 1.2rem;
  color: ${Colors.white};
`;
