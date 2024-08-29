import React from 'react';
import { Calendar, Camera, ArrowUp } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white">
      {/* Background Image */}
      <img
        src="/images/mountain.jpg"
        alt="Mountains"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl font-bold">REAL WORLD</h1>
        <p className="mt-4 text-lg max-w-xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis pulvinar dapibus leo.
        </p>

        {/* Icons */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="p-4 bg-orange-500 rounded-md">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <div className="p-4 bg-gray-700 rounded-md">
            <Camera className="w-8 h-8 text-white" />
          </div>
          <div className="p-4 bg-gray-700 rounded-md">
            <ArrowUp className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Button */}
        <button className="mt-8 px-6 py-3 bg-orange-500 text-lg font-semibold rounded-md shadow-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;