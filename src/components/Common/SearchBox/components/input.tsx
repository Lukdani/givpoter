import styled from "styled-components";

interface SearchInputProps {
  placeholder?: string; 
  alignment?: string; 
  margin?:boolean 
}

export const SearchInput = 
styled.input.attrs<SearchInputProps>( 
  ({placeholder}) => ({
    placeholder: placeholder,
  })
)<SearchInputProps>
`
margin: ${props => props.margin? '0 20px' : ''};
border: 1px solid #9e9e9e;
color: #1b1b1b;
padding: 10px 20px;
border-radius:25px;
outline: none;
box-sizing: border-box;
`;