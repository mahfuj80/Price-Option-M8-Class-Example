// import React from 'react';
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  return (
    <div className="bg-blue-500 flex flex-col rounded-lg p-4 text-white">
      <h2 className="text-center mb-3">
        <span className="text-7xl font-extrabold">{price}</span>
        <span className="text-2xl">/month</span>
      </h2>
      <h4 className="text-3xl text-center mb-4">{name}</h4>
      <div className="pl-6 flex-grow">
        {features.map((feature, idx) => (
          <Feature key={idx} feature={feature}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-3 font-bold rounded-lg hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object.isRequired,
};

export default PriceOption;
