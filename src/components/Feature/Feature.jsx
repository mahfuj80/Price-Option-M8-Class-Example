// import React from 'react';
import PropTypes from 'prop-types';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center gap-2">
        <BsFillCheckCircleFill className="text-green-500"></BsFillCheckCircleFill>{' '}
        {feature}
      </p>
    </div>
  );
};

Feature.propTypes = {
  feature: PropTypes.string.isRequired,
};

export default Feature;
