import React from 'react';

const ValuesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto  text-center">
        <h2 className="text-lg font-semibold text-gray-500">Our Values</h2>
        <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-green-500">
          Respect
        </h1>
        <div className="">

            <p className="mt-4 text-3xl sm:text-lg text-gray-700">
            Respect Equality Socialism Peace Environment Community Trade
            </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-500 my-8 mx-auto  max-w-5xl"></div>

      {/* Additional Values */}
      <div className="max-w-5xl mx-auto gap-16 flex flex-wrap justify-center ">
        <span className="text-xl  font-medium text-gray-800">RESPECT</span>
        <span className="text-xl  font-medium text-gray-800">TRUST</span>
        <span className="text-xl  font-medium text-gray-800">COURAGE</span>
        <span className="text-xl  font-medium text-gray-800">UNITY</span>
        <span className="text-xl  font-medium text-gray-800">QUALITY</span>
        <span className="text-xl  font-medium text-gray-800">AGILITY</span>
        <span className="text-xl  font-medium text-gray-800">FORETHOUT</span>
      </div>
    </section>
  );
};

export default ValuesSection;