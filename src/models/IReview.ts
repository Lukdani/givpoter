export interface IReview {
    review_id: number;
    product_id: number;
    user_id: number,
    timestamp: Date;
    title: string;
    body_text: string;
}