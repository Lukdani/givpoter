import React from "react";
import { useApiGet } from "../../hooks/useApiGet";
import { IReview } from "../../models/IReview";
import { GetReviews } from "../../services/ReviewService";
import { Column, Container, Row } from "../Common/components/grid";
import ReviewCard from "../Common/reviewCard";

export interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = () => {
  const { data } = useApiGet({ url: GetReviews, disableAuth: true });
  return (
    <Container>
      <Row>
        <h1>Anmeldelser</h1>
      </Row>
      <Row>
        {data?.reviews?.map((review: IReview) => (
          <Column width={3} padding={true}>
            <ReviewCard
              title={review.title}
              timestamp={review.timestamp}
              body={review.body_text}
            />
          </Column>
        ))}
      </Row>
    </Container>
  );
};

export default Reviews;
