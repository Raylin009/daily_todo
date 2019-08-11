import React from 'react';
import PTDItem from './PTDItem.jsx'

const PastTodos = ({ lists }) => (
  <div style={{ border: 'solid', margin: '5px', order: 1, flexGrow: 1 }}>
    <h2>PastTodo.jsx</h2>
    { lists.length ? lists.map(ele => <PTDItem {...ele} />) : console.log('no todos')}
  </div>
);

export default PastTodos;
