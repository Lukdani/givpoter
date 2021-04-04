import moment from "moment";
import React from "react";
import { IProduct } from "../../../models/IProduct";

import {
  StyledCard,
  StyledCardContent,
  StyledCardTimestamp,
  StyledCardTitle,
} from "../card/components";

export interface ReviewCardProps {
  title: string;
  timestamp: Date;
  body: string;
  product?: IProduct;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  title,
  timestamp,
  body,
  product,
}) => {
  return (
    <StyledCard FullHeight={true}>
      <StyledCardContent>
        <StyledCardTimestamp>
          {moment(timestamp).format("DD/MM:YYYY - HH:mm")}
          <br />
          {`${product?.product_name} | ${product?.product_type} | ${product?.company_id}`}
        </StyledCardTimestamp>
        <StyledCardTitle>{title}</StyledCardTitle>
        <p>{body}</p>
      </StyledCardContent>
    </StyledCard>
  );
};

export default ReviewCard;
