import * as React from 'react';
import { Row } from '../../components/grid';
import { StyledSelect} from './styledSelect';
import { StyledLabel } from '../Input/label';


export interface SelectProps {
    label: string;
    name: string;
    value: string | number | undefined;
    error?: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
 
const Select: React.FC<SelectProps> = ({name, label, handleChange, value, error}) => {
    return ( 
        <div style={{margin: '10px 0'}}>
        <Row>
        <StyledLabel>{label}</StyledLabel>
        </Row>
        <Row>
        <StyledSelect name={name} value={value || ''} onChange={handleChange}>
            <option>Pedigree</option>
            <option>Food Inc.</option>
            </StyledSelect>
        </Row>
        <Row>
        <StyledLabel>{error}</StyledLabel>
        </Row>
        </div>
     );
}
 
export default Select;