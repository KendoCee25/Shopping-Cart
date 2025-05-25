//import React from "react";
import { useState, useEffect } from 'react';
import { useGetProductsQuery } from '../features/productsApi';
import classes from '../components/productSection.module.css'


interface Product {
  id: number;
  title: string;
  price: number;
  discountPercentage: number;
  category: string;
  thumbnail: string;
}

const ProductSection = () => {
  const [skip, setSkip] = useState(0);
  const { data, isFetching } = useGetProductsQuery(skip);
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (data && data.products.length > 0) {
      setAllProducts((prev) => [...prev, ...data.products]);
    }
  }, [data]);

  const handleLoadMore = () => {
    setSkip((prev) => prev + 8);
  };


    return(
        <div>
             <section className={classes['products-section']}>
        <div className={classes['section-content-wrapper']}>
          <p className={classes['section-title1']}>Featured Products</p>
          <h2 className={classes['section-title2']}>BESTSELLER <span>PRODUCTS</span></h2>
          <p className={classes['section-description']}>Problems trying to resolve the <span>conflict between</span></p>
          <div className={classes['product-grid']}>
            <div className={classes['product-grid']}>
            {allProducts.map((product) => (
              <div className={classes['product-card']} key={product.id}>
                <img src={product.thumbnail} alt={product.title} className={classes['product-image']} />
                <h3 className={classes['product-title']}>{product.title}</h3>
                <p className={classes['product-department']}>{product.category}</p>
                <div className={classes['product-price-wrapper']}>
                  
                  <span className={classes['old-price']}>
                    ${Math.round(product.price / (1 - product.discountPercentage / 100))}
                    
                  </span>
                  <span className={classes['current-price']}>${product.price}</span>
                </div>
              </div>
            ))}
          </div>
          </div>
          <div className={classes['load-more-button-wrapper']}>
            <button className={classes['load-more-button']} onClick={handleLoadMore} disabled={isFetching}>
              {isFetching ? 'Loading...' : 'Load More Products'}
            </button>
          </div>
        </div>
      </section>
        </div>
    )
}

export default ProductSection
