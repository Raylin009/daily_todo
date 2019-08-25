import React, { useState } from 'react';

const PTDItem = ({ date, id, name, listSelection }) => {
  const [visiility, showAndHide] = useState(true);

  return (
    <div
      onMouseEnter={()=>showAndHide(!visiility)}
      onMouseLeave={()=>showAndHide(!visiility)}
      onClick={() => (listSelection( id, name, date ))}
      key={id}
      style={{ border: 'solid', margin: '5px' }}
    >
      <h1>
        { name }
      </h1>
      <div hidden={visiility}>X</div>
    </div>
  );
};

export default PTDItem;
