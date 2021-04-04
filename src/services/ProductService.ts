const prefix_product = "product";
const prefix_products = "products";

const GetAllProducts = `/${prefix_products}`;

const GetProduct = (productName: string) => `/${prefix_product}/${productName}`;

const ReviewProduct = `${prefix_product}/review`

export { GetAllProducts, GetProduct, ReviewProduct };
