import styled from "styled-components";

interface IconProps {
  icon: string;
  color?: string;
  size?: string;
  addMargin?: string;
}

export const Icon = styled.i.attrs<IconProps>(({ icon }) => ({
  className: `fas fa-${icon}`,
}))<IconProps>`
  color: ${(props) => (props.color ? props.color : "#53A548")};
  transition: color 0.2s ease-in;
  font-size: ${(props) => (props.size ? props.size : "24px")};
  ${(props) => props.addMargin && `margin-${props.addMargin}: 10px`};
`;
