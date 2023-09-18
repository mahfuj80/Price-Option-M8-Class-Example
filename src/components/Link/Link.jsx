// import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ route }) => {
  return (
    <li className="md:mr-10 px-6 py-2 rounded-lg hover:bg-yellow-500 ml-4 md:ml-0">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

Link.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Link;
