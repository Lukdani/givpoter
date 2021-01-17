import styled from "styled-components";

interface LabelProps {
  placeholder?: string; 
  alignment?: string; 
  margin?:boolean 
}

export const StyledLabel = 
styled.span.attrs<LabelProps>( 
  ({placeholder}) => ({
    placeholder: placeholder,
  })
)<LabelProps>
`
color: #bdbdbd;
font-size:12px;
`;