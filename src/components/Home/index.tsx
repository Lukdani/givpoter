import React, { useContext } from "react";
import { useApiGet } from "../../hooks/useApiGet";
import { IReview } from "../../models/IReview";
import { ProductContext } from "../../providers/productProvider";
import { GetReviews } from "../../services/ReviewService";
import { Column, Container, Row } from "../Common/components/grid";
import ReviewCard from "../Common/reviewCard";
import { HeroContainer } from "./components/HeroContainer";
import { HeroHeader } from "./components/HeroHeader";

export interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const { data } = useApiGet({ url: GetReviews, disableAuth: true });
  const { products } = useContext(ProductContext);
  return (
    <Row>
      <Column>
        <HeroContainer>
          <HeroHeader>De bedste produkter</HeroHeader>
          <HeroHeader>til din bedste ven</HeroHeader>
        </HeroContainer>
        <Container>
          <Row>
            <h1>Seneste anmeldelser</h1>
          </Row>
          <Row margin>
            {data?.reviews?.map((review: IReview) => (
              <Column width={3} padding>
                <ReviewCard
                  title={review.title}
                  timestamp={review.timestamp}
                  body={review.body_text}
                  product={products?.find(
                    (productElement) =>
                      productElement.product_id === review.product_id
                  )}
                />
              </Column>
            ))}
          </Row>
        </Container>
      </Column>
    </Row>
  );
};

export default Home;
