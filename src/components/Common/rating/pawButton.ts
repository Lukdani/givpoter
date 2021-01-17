import styled from "styled-components";

export const PawButton = 
styled.button<{ backgroundColor?: string }>
`background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#53A548')};
 color: #fff;
 border: 0;
 border-radius: 25px;
 font-size: 18px;
 cursor: pointer;
 outline: none;
 padding:0;
 margin: 5px 0px;
 margin-right: 7.5px;

 &:hover {
     color: #6fbc64;
 }
`;