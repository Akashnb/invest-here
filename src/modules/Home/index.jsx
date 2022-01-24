import React from "react";

const Home = () => (
  <section id="#home" className="h-screen max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-4 h-screen items-center pt-36 md:pt-0 px-5 md:px-0">
      <div className="order-2 md:order-1">
        <h1 className="text-5xl font-bold mb-3 font-display">
          Make Your Business More Profitable
        </h1>
        <p className="mb-12 text-base text-textAccentMedium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <button className="relative transition bg-accentMain px-6 py-3 rounded-full text-white text-base shadow-accentMain hover:shadow-accentMainHover hover:-top-px">
          Get Started
        </button>
      </div>
      <div className="col-span-2 flex justify-end order-1 md:order-2">
        <img
          src="https://gist.githubusercontent.com/Akashnb/aad2eff22bea94bd4a0a7cc774671f72/raw/33d0e28b0be0c7dc8bab74ce78583f693589af19/image-four.svg"
          alt="img"
        />
      </div>
    </div>
  </section>
);

export default Home;
