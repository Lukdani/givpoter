import React, { useEffect, useState } from "react";
import { useApiGet } from "../hooks/useApiGet";
import { IProduct } from "../models/IProduct";
import { GetAllProducts } from "../services/ProductService";

export const ProductContext = React.createContext<
  Partial<{ products: IProduct[] }>
>({});

interface ProductProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ProductConsumer = ProductContext.Consumer;

export const ProductProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<IProduct[]>();
  const { data } = useApiGet({ url: GetAllProducts, disableAuth: true });

  console.log(products);

  useEffect(() => {
    if (data) setProducts(data?.products);
  }, [data]);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
