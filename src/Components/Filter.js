import React from 'react';

const Filter = ({ filter }) => {
  return (
    <input type="text" placeholder="Find contact by name" onChange={filter} />
  );
};

export default Filter;
