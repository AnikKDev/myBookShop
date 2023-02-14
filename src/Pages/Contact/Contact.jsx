import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="hero min-h-screen rounded-lg bg-base-200 py-24">
        <div className="hero-content justify-around flex-col lg:flex-row-reverse">
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Get In Touch With Us...</h1>
            <p className="py-6">
              We would love to hear from you! If you have any questions,
              comments, or feedback, please feel free to contact us using the
              form below. Our team will get back to you as soon as possible.
              Thank you for your interest in our website and we look forward to
              hearing from you.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Type Something..."
                  className="input h-32 input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
