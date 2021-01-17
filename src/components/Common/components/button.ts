import styled from "styled-components";

export const Button = 
styled.button<{ backgroundColor?: string }>
`background-color: ${props => (props.backgroundColor ? props.backgroundColor : '#53A548')};
 padding: 10px 20px;
 margin: 0 10px;
 color: #fff;
 border: 0;
 border-radius: 25px;
 font-size: 18px;
 cursor: pointer;
 outline: none;

 &:hover {
     background-color: #6fbc64;
     color:#fff;
 }
`;