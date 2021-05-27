import PropTypes from 'prop-types';
import React from 'react';

const Button = ({ handleLoadMoreButton }) => (
  <button className="Button" type="button" onClick={handleLoadMoreButton}>
    Load more
  </button>
);

Button.propTypes = {
  handleLoadMoreButton: PropTypes.func.isRequired,
};

export default Button;
