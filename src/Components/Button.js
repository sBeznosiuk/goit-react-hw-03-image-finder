import React from 'react';

const Button = ({ handleLoadMoreButton }) => (
  <button className="Button" type="button" onClick={handleLoadMoreButton}>
    Load more
  </button>
);

export default Button;
