import styled from "styled-components";

interface InputProps {
  placeholder?: string; 
}

export const Input = 
styled.input.attrs<InputProps>( 
  ({placeholder}) => ({
    placeholder: placeholder,
  })
)<InputProps>
`
border: 0;
border-bottom: 1px solid #bdbdbd;
background-color: #fff;
color: #1b1b1b;
padding: 5px 0px;
outline: none;
box-sizing: border-box;
width: 100%;
&:focus {
  border-bottom: 1px solid #6fbc64;
}
`;