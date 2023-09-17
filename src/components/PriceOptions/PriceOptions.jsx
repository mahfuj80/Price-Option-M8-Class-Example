// import React from 'react';
// import PropTypes from 'prop-types';

import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: 'Jim Standard',
      price: 799.99,
      features: [
        'Basic functionality',
        'Standard support',
        'Limited customization',
        'Regular software updates',
        'Access to online knowledge base',
      ],
    },
    {
      id: 2,
      name: 'Jim Pro',
      price: 1299.99,
      features: [
        'Enhanced functionality',
        'Priority support',
        'Moderate customization',
        'Usage analytics and reporting',
        'Integration with popular third-party apps',
      ],
    },
    {
      id: 3,
      name: 'Jim Premium',
      price: 1999.99,
      features: [
        'Full functionality',
        '24/7 Premium support',
        'Advanced customization',
        'Comprehensive usage analytics and reporting',
        'Integration with other systems and APIs',
      ],
    },
  ];
  return (
    <div>
      <h2 className="Best Prices in the town"></h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;
