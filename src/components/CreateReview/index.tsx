import React, { useEffect } from "react";
import useApiPost from "../../hooks/useApiPost";
import useForm from "../../hooks/useForm";
import { ReviewProduct } from "../../services/ProductService";
import { Button } from "../Common/components/button";
import { Column, Row } from "../Common/components/grid";
import Input from "../Common/forms/Input";
import Rating from "../Common/rating";
import useRating from "../Common/rating/useRating";

export interface CreateReviewProps {
  productId: number;
  onAbort: () => void;
}

const CreateReview: React.FC<CreateReviewProps> = ({ productId, onAbort }) => {
  const { data, handleInputChange } = useForm({
    product_id: productId,
    title: "",
    body_text: "",
  });

  const { callPost } = useApiPost();

  const {
    rating,
    changeRating,
    hoveredRating,
    changeHoveredRating,
    highlightRating,
  } = useRating();

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleSubmit = () => {
    callPost({ url: ReviewProduct, data: data });
  };

  return (
    <Row margin halign="center">
      <Column width={12} halign="center">
        <p>Create Review (product ID: {productId})</p>
        <Input
          name="title"
          value={data.title}
          handleChange={handleInputChange}
          label="Overskrift"
        />
        <Input
          name="body_text"
          value={data.body_text}
          handleChange={handleInputChange}
          label="Beskrivelse"
        />
        <Rating
          value={rating}
          changeRating={changeRating}
          hoveredRating={hoveredRating}
          changeHoveredRating={changeHoveredRating}
          highlightRating={highlightRating}
        />
        <Row margin halign="right">
          <Button onClick={handleSubmit}>Submit review</Button>
          {onAbort && (
            <Button backgroundColor="grey" onClick={onAbort}>
              Cancel
            </Button>
          )}
        </Row>
      </Column>
    </Row>
  );
};

export default CreateReview;
