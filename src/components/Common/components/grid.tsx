import styled from "styled-components";

export const Row = 
styled.div<{margin?: boolean,valign?: boolean, halign?:string }>
`
  display:flex;
  width: 100%;
  align-items: ${props => props.valign? 'center' : ''};
  justify-content: ${props => props.halign? alignmentValues[props.halign] : ''};  
  margin: ${props => props.margin? '20px 0' : ''}  
`;

const alignmentValues: any = {
    right: 'flex-end',
    center: 'center',
}


export const Column = 
styled.div<{ padding?: boolean, width?: number, alignment?: string, valign?: boolean, halign?:string }>
`width: ${props => (props.width ? `${props.width / .12}%` : '1')};
  flex: ${props => (props.width ? '' : '1')};
  text-align: ${props => props.alignment? props.alignment : ''};
  display: ${props => props.valign? 'flex' : ''};
  align-items: ${props => props.valign? 'center' : ''};
  justify-content: ${props => props.halign? alignmentValues[props.halign] : ''};
  padding-right: ${props => (props.padding ? "20px" : '0')};

`;

export const Container = 
styled.div
`width: 100%;
background-color: '#F0F2F5';
padding: 20px;
`;