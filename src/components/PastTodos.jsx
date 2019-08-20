import React from 'react';
import PTDItem from './PTDItem.jsx'

const PastTodos = ({ lists, listSelection }) => (
  <div style={{ border: 'solid', margin: '5px', order: 1, flexGrow: 1 }}>
    <h2>PastTodo.jsx</h2>
    { lists.length ? lists.map((ele, index)=> <PTDItem {...ele} listSelection={listSelection} />) : console.log('no todos')}
  </div>
);

export default PastTodos;
