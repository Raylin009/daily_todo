import React from 'react';

const PTDItem = ({ id, name }) => (
  <div
    key={id}
    style={{ border: 'solid', margin: '5px' }}
  >
    <h3>{name}</h3>
  </div>
);

export default PTDItem;
