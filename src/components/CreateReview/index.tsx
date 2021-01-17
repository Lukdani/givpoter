import React, { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import { Button } from '../Common/components/button';
import { Column, Row } from '../Common/components/grid';
import Input from '../Common/forms/Input';
import Select from '../Common/forms/Select';
import Rating from '../Common/rating';
import useRating from '../Common/rating/useRating';
import { Header } from './../Common/components/header';

export interface CreateReviewProps {
    
}
 
const CreateReview: React.FC<CreateReviewProps> = () => {
    const {values, handleChange} = useForm();
    const {rating, changeRating, hoveredRating, changeHoveredRating, highlightRating} = useRating();

    
    useEffect(() => {
console.log(values)
    }, [values])

    return ( 
        <>

    <Row margin halign="center" >
        <Column style={{backgroundColor:'#fff', padding: '30px', borderRadius: 5}} width={3} halign="center">
        <Header>Create Review</Header>
        <Select name="company" value={values.company} handleChange={handleChange} label="Company" />
        <Input name="productName" value={values.productName} handleChange={handleChange} label="Product name" />
    <Input name="description" value={values.description} handleChange={handleChange} label="Description" />
    <Rating value={rating} changeRating={changeRating} hoveredRating={hoveredRating} changeHoveredRating={changeHoveredRating} highlightRating={highlightRating} />
    <Row margin halign="center">
    <Button>Submit review</Button>
    </Row>
  
        </Column>
    </Row>
  
        </>

    );
}
 
export default CreateReview;