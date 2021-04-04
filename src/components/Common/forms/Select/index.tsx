import * as React from "react";
import { Row } from "../../components/grid";
import { StyledSelect } from "./styledSelect";
import { StyledLabel } from "../Input/label";
import { ISelectOption } from "../../../../models/ISelectOpton";

export interface SelectProps {
  label: string;
  options?: ISelectOption[];
  name: string;
  value: string | number | undefined;
  error?: string;
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  name,
  label,
  options,
  handleChange,
  value,
  error,
}) => {
  return (
    <div style={{ margin: "10px 0" }}>
      <Row>
        <StyledLabel>{label}</StyledLabel>
      </Row>
      <Row>
        <StyledSelect name={name} value={value || ""} onChange={handleChange}>
          {options?.map((optionElement) => (
            <option value={optionElement.value}>{optionElement.label}</option>
          ))}
        </StyledSelect>
      </Row>
      <Row>
        <StyledLabel>{error}</StyledLabel>
      </Row>
    </div>
  );
};

export default Select;
