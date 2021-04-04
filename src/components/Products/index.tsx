import React from "react";
import { useApiGet } from "../../hooks/useApiGet";
import { IProduct } from "../../models/IProduct";
import { GetAllProducts } from "../../services/ProductService";
import { Column, Container, Row } from "../Common/components/grid";
import ProductCard from "../Common/productCard";

export interface ProductsProps {}

const Products: React.FC<ProductsProps> = () => {
  const { data } = useApiGet({ url: GetAllProducts, disableAuth: true });
  return (
    <Container>
      <Row>
        <h1>Produkter</h1>
      </Row>
      <Row>
        {data?.products?.map((productElement: IProduct) => (
          <Column width={3} padding={true}>
            <ProductCard
              productName={productElement.product_name}
              productType={productElement.product_type}
              description={productElement.description}
              company_id={productElement.company_id}
              product_id={productElement.product_id}
            />
          </Column>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
