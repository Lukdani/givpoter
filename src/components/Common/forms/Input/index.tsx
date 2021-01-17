import * as React from 'react';
import { Row } from '../../components/grid';
import { Input as StyledInput } from './input';
import { StyledLabel } from './label';


export interface InputProps {
    label: string;
    name: string;
    value: string | number | undefined;
    error?: string;
    placeholder?:string;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
 
const Input: React.FC<InputProps> = ({name, label, handleChange, value, error, placeholder}) => {
    return ( 
        <div style={{margin: '10px 0'}}>
        <Row>
        <StyledLabel>{label}</StyledLabel>
        </Row>
        <Row>
        <StyledInput placeholder={placeholder} name={name} value={value || ''} onChange={handleChange}/>
        </Row>
        <Row>
        <StyledLabel>{error}</StyledLabel>
        </Row>
        </div>
     );
}
 
export default Input;