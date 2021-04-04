import React, { useCallback, useState } from "react";
import CreateReview from "../../CreateReview";
import {
  StyledCard,
  StyledCardContent,
  StyledCardTimestamp,
  StyledCardTitle,
} from "../card/components";
import { Button } from "../components/button";
import { Column, Row } from "../components/grid";
import { Icon } from "../components/icon";

export interface ProductCardProps {
  productName: string;
  productType: string;
  description: string;
  company_id: number;
  product_id: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  productType,
  description,
  company_id,
  product_id,
}) => {
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);

  const toggleReview = useCallback(() => {
    setShowReviewForm((prevValue) => !prevValue);
  }, []);

  return (
    <StyledCard FullHeight={false}>
      <StyledCardContent>
        <StyledCardTimestamp>
          {productType} <Icon icon="paw" color="#bdbdbd" size="12" /> |{" "}
          {company_id}
        </StyledCardTimestamp>
        <StyledCardTitle>{productName}</StyledCardTitle>
        <p>{description}</p>
        <Row>
          <Column width={12}>
            <Button disabled={showReviewForm} onClick={toggleReview}>
              Anmeld
            </Button>

            <Button backgroundColor="#bdbdbd">Anmeldelser</Button>
          </Column>
        </Row>
        {showReviewForm && (
          <CreateReview productId={product_id} onAbort={toggleReview} />
        )}
      </StyledCardContent>
    </StyledCard>
  );
};

export default ProductCard;
