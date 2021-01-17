import styled from "styled-components";

export const Header = 
styled.h1<{ active?: boolean }>`
  color: ${props => (props.active ? '#1b1b1b' : '#1b1b1b')};
  text-align: center;
`;