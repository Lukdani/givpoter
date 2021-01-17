import styled from "styled-components";

interface HeroHeaderProps {
  placeholder?: string; 
  alignment?: string; 
  margin?:boolean 
}

export const HeroHeader = 
styled.h1.attrs<HeroHeaderProps>( 
  ({placeholder}) => ({
    placeholder: placeholder,
  })
)<HeroHeaderProps>
`
color: #fff;
font-size: 50px;
margin: 0;
`;