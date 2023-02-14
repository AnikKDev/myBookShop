import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
const ProductsCarouselCard = ({ item }) => {
  return (
    <div className="card hover:bg-white card-compact hover:shadow-lg transition-all bg-base-100  my-6">
      <figure className="">
        <img className="h-96 py-6" src={item?.image} />
      </figure>
      <div className="card-body text-left">
        <h2 className="card-title">{item?.name}</h2>
        <p className="">
          {item?.description.slice(0, 100)}...
          <span className="font-bold hover:underline cursor-pointer">
            Read More
          </span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary btn-sm rounded-full btn-primary">
            <AiOutlineEye size={20} />
          </button>
          <button className="btn hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary btn-sm rounded-full btn-primary">
            <AiOutlineHeart size={20} />
          </button>
          <button className="btn hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary btn-sm rounded-full btn-primary">
            <AiOutlineShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCarouselCard;
