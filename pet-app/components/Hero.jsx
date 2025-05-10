import React from 'react';
import bgimage from '../assests/hero-bg.png'; 
import pretitleImg from '../assests/pretitle-img.svg'; 

export default function Hero() {
  return (
    <section
      className="relative w-full bg-cover bg-center py-20 px-6 md:px-16"
      style={{
        backgroundImage: `url(${bgimage.src})`,
      }}
    >
      <div className="relative max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between z-15">
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Pretitle with Image */}
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <img src={pretitleImg.src} alt="" width={'100%'} height={'auto'} />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-8xl font-bold uppercase -tracking-[0.05em] text-gray-900 mb-10">
            A PET-FIRST <br />
            <span className="text-orange-500">APPROACH TO</span> <br />
            WELLNESS
          </h1>

          {/* Button */}
          <div className="flex justify-center lg:justify-start">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-18 rounded-full transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
