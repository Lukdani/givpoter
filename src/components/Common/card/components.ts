import { Card, CardContent } from "@material-ui/core";
import styled from "styled-components";

export const StyledCard = styled(Card)<{ FullHeight?: boolean }>`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px !important;
  ${(props) => props.FullHeight && "height: 100%;"};
`;

export const StyledCardContent = styled(CardContent)``;

export const StyledCardTitle = styled.h2`
  margin: 10px 0px;
`;

export const StyledCardTimestamp = styled.p`
  color: #707070;
  font-size: 14px;
`;
