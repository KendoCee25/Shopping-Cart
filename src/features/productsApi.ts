import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
}

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductsResponse, number>({
      query: (skip = 0) => `products?limit=8&skip=${skip}`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
