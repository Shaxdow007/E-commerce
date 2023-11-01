import React from "react";

const HeroSection = () => {
  return (
    <section className="my-12" id="home">
      <div className="container mx-auto p-6">
        <div className="hero">
          <h1 className="text-center capitalize font-black md:text-4xl lg:text-6xl">
            get the best quality of products from us
          </h1>
          <div className="hero-img my-8">
            <img
              src="./images/product1.jpg"
              alt="prodoct"
              className="rounded object-cover w-11/12 mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
