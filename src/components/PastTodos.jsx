import React from 'react';
import PTDItem from './PTDItem.jsx'

const PastTodos = ({ lists, listSelection }) => (
  <div style={{ border: 'solid', margin: '5px', order: 1, flexGrow: 1 }}>
    { lists.length ? lists.map((ele, index)=> <PTDItem key={ele.id} {...ele} listSelection={listSelection} />) : console.log('no todos')}
  </div>
);

export default PastTodos;
