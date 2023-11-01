import React from "react";
import Boxs from "./Boxs";

const AboutUs = () => {
  return (
    <section className="mb-12" id="about us">
      <div className="container mx-auto p-6">
        <div className="about-us capitalize rounded p-6 lg:p-12">
          <span className="inline-block text-sm mb-3 lg:mb-6">
            new products
          </span>
          <h5 className="font-semibold text-lg md:text-4xl lg:text-6xl">
            the wait is on <br /> glasses ray ban
          </h5>
          <p className="mt-3 lg:mt-6 text-lg">
            last call for up <strong>32%</strong> off
          </p>
          <button className="capitalize mt-3 lg:mt-6 bg-white px-6 py-2 rounded-md hover:bg-zinc-900 hover:text-white ease-in duration-300">
            buy now
          </button>
        </div>
        <div className="">
          {/* boxs */}
          <Boxs />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
