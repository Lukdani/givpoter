import styled from "styled-components";

interface SelectProps {
  placeholder?: string; 
}

export const StyledSelect = 
styled.select.attrs<SelectProps>( 
  ({placeholder}) => ({
    placeholder: placeholder,
  })
)<SelectProps>
`
border: 0;
border-bottom: 1px solid #bdbdbd;
background-color: #fff;
color: #1b1b1b;
padding: 5px 0px;
outline: none;
box-sizing: border-box;
width: 100%;
& option {
  border: 0;
}
`;