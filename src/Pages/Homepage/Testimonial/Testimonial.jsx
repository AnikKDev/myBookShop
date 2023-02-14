import React from "react";
import TestimonialCard from "./TestimonialCard";
import styles from "./Testimonial.module.css";
const Testimonial = () => {
  return (
    <div
      className={`border-2 border-primary p-12 h-full ${styles.testimonials__container}`}
    >
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <h1 className="text-4xl text-white">
        What our <span className="text-primary font-bold">Happy Customers</span>{" "}
        says,
      </h1>
      {/* cards will be here */}
      <div className="grid grid-cols-1 lg:grid-cols-3 my-12 gap-3">
        <div data-aos="zoom-in" data-aos-duration="2000">
          <TestimonialCard
            content="I recently purchased 'The Da Vinci Code' from this bookstore and I couldn't be happier with my experience. The staff were friendly and knowledgeable, helping me find the book I was looking for quickly and easily. The store itself was well organized and had a great selection of books across various genres. "
            name="Ethan"
            avatar="https://images.unsplash.com/photo-1581382575275-97901c2635b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <TestimonialCard
            content="I've been a regular customer of this bookstore for years and I can honestly say it's one of the best bookstores around. The staff are always helpful and knowledgeable about the books they carry, and they go out of their way to make sure you find what you're looking for. The store is always clean, organized, and well-stocked, and they carry a great selection of both popular and niche books. If you're a book lover, you won't be disappointed!"
            name="Xavier"
            avatar="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          />
        </div>
        <div data-aos="zoom-in" data-aos-duration="2000">
          <TestimonialCard
            content="I had a fantastic experience shopping at this bookstore. The selection of books was impressive, and the staff were extremely helpful and friendly. They were happy to recommend books based on my interests and even took the time to show me a few hidden gems I would have otherwise missed. The store itself was cozy and welcoming, and it was clear that the staff take great pride in creating a great shopping experience for their customers. I highly recommend this bookstore to anyone looking for a great selection of books and exceptional customer service."
            name="Maya"
            avatar="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
