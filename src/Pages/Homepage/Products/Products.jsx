import React from "react";
import ProductsCarouselCard from "./ProductsCarouselCard/ProductsCarouselCard";
import ProductsCarouselContainer from "./ProductsCarouselCard/ProductsCarouselContainer";
import ProductsMainCard from "./ProductsMainCard/ProductsMainCard";

const Products = ({ productData }) => {
  return (
    <div className="grid my-12 lg:grid-cols-2 grid-cols-1 gap-4">
      <div>
        <ProductsMainCard cardInfo={productData?.cardInfo} />
      </div>
      {/* carousel will be here */}
      <div className="">
        {/* <ProductsCarouselCard />
        <ProductsCarouselCard /> */}
        <ProductsCarouselContainer productList={productData?.data} />
      </div>
    </div>
  );
};

export default Products;
