import React from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiOutlineEye,
} from "react-icons/ai";
import styles from "./TopAndBestSmallCard.module.css";
const TopAndBestSmallCard = ({ data }) => {
  return (
    <div
      className={`card max-w-96 hover:bg-[#f0efe4] transition-all bg-base-100 hover:shadow-xl ${styles.topAndBestSmallCard__container}`}
    >
      <div className="card-body justify-around flex-row items-center">
        <div className="mx-2">
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={data?.image} />
            </div>
          </div>
        </div>
        <div className="mx-2">
          <h2 className="card-title ">{data?.name}</h2>
          <h3 className="text-xl font-bold mt-3 text-primary">
            ${data?.price}
          </h3>
        </div>
        <div className="mx-2">
          <button className="btn hover:bg-white border-2 hover:text-secondary hover:border-2 hover:border-secondary btn-md rounded-full btn-primary">
            <AiOutlineShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopAndBestSmallCard;
