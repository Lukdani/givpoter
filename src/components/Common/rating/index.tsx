import * as React from 'react';
import { Row } from '../components/grid';
import { Icon } from '../components/icon';
import { StyledLabel } from './label';
import { PawButton } from './pawButton';


export interface RatingProps {
    value: number;
    changeRating: (value:number) => void;
    hoveredRating: number;
    changeHoveredRating: (value:number) => void;
    highlightRating: (value:number) => boolean;
}
 
const Rating: React.FC<RatingProps> = ({value, changeRating, changeHoveredRating, highlightRating}) => {
    
    return ( 
      
        <div style={{margin: '10px 0'}}>
              <Row>
            <StyledLabel>Your rating</StyledLabel>
            </Row>
            <Row>
            {
                [1, 2, 3,4 ,5].map(item => <PawButton onMouseEnter={() =>  changeHoveredRating(item)}onMouseLeave={() => changeHoveredRating(0)} backgroundColor="#fff" onClick={() => changeRating(item)}><Icon color={highlightRating(item)? '#6fbc64' : '#eee'} icon='paw' />
                </PawButton>)
            }
            </Row>
        </div>
     );
}
 
export default Rating;