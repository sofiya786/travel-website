import React from "react";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('https://yourimageurl.com')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Welcome to Divine Cruise</h1>
        <p className="text-xl md:text-2xl mb-8">
          Discover exotic destinations and unforgettable travel experiences with us.
        </p>
        {/* <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition duration-300">
          Explore Now
        </button> */}
      </div>
    </div>
  );
};

export default Hero;
