import React from 'react';
import { Column, Row } from '../../Common/components/grid';
import { FooterContainer } from './components.ts/footerContainer';

export interface FooterProps {
    
}
 
const Footer: React.FC<FooterProps> = () => {
    return ( 
        <>
        <Column>

<FooterContainer>
<Row>
    <Column alignment='left'>
        NoteBook <br/>
        
    </Column>
</Row>
</FooterContainer>
</Column>
</>
     );
}
 
export default Footer;