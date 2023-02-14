import React from "react";

const ProductsMainCard = ({ cardInfo }) => {
  return (
    <div className="card lg:card-side bg-white h-full shadow-xl">
      <figure>
        <img className="h-full w-full" src={cardInfo?.image} alt="Album" />
      </figure>
      <div className="card-body w-full lg:w-1/2">
        <h2 className="card-title">{cardInfo?.title}</h2>
        <p className="">{cardInfo?.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsMainCard;
