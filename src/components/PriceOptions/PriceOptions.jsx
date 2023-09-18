// import React from 'react';
// import PropTypes from 'prop-types';

import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: 'Jim Standard',
      price: 99,
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
      price: 129,
      features: [
        'Enhanced functionality',
        'Priority support',
        'Moderate customization',
        'Usage analytics and reporting',
        'Integration with popular third',
      ],
    },
    {
      id: 3,
      name: 'Jim Premium',
      price: 199,
      features: [
        'Full functionality',
        '24/7 Premium support',
        'Advanced customization',
        'Comprehensive usage analytics',
        'Integration with other systems  APIs',
      ],
    },
  ];
  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      <div className="grid md:grid-cols-3 gap-6 m-12">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

PriceOptions.propTypes = {};

export default PriceOptions;
