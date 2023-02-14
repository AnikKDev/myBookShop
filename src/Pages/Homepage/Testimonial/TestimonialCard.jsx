import React from "react";
import styles from "./TestimonialCard.module.css";
const TestimonialCard = ({ content, name, avatar }) => {
  return (
    <div>
      <div
        className={`card glass max-w-96 text-white shadow-xl ${styles.testimonialCard__contianer}`}
      >
        <div className="card-body">
          <div className="flex items-center">
            <div className="avatar">
              <div className="w-12 rounded-full">
                <img src={avatar} />
              </div>
            </div>
            <div className="mx-3">
              <h2 className="card-title ">{name}</h2>
              <h6 className="">12/12/2023</h6>
            </div>
          </div>
          <p className="">{content}</p>
          <div className="card-actions justify-end">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
