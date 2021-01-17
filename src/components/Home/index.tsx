import React from 'react';
import { Column, Row } from '../Common/components/grid';
import { HeroContainer } from './components/HeroContainer';
import { HeroHeader } from './components/HeroHeader';

export interface HomeProps {
    
}
 
const Home: React.FC<HomeProps> = () => {
    return ( 
        <Row>
            <Column>
            
            <HeroContainer>
                <HeroHeader>
                    De bedste produkter
                </HeroHeader>
                <HeroHeader>
                    til din bedste ven
                </HeroHeader>
                </HeroContainer>
            </Column>
        </Row>
     );
}
 
export default Home;