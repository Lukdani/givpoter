import React from 'react';
import { StyledCard, StyledCardContent, StyledCardTitle } from './components';


export interface CardProps {
    title: string;
    body: string;
}
 
const Card: React.FC<CardProps> = ({title, body}) => {
    
    return ( 
        <StyledCard>
        <StyledCardContent>
          <StyledCardTitle>
           {title}
          </StyledCardTitle>
          <p>
              {body}
          </p>
        </StyledCardContent>
      </StyledCard>
     );
}
 
export default Card;