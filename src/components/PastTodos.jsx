import React from 'react';
import PTDItem from './PTDItem.jsx'

const PastTodos = props => (
  <div style={{ border: 'solid', margin: '5px', order: 1, flexGrow: 1 }}>
    <h2>PastTodo.jsx</h2>
    <PTDItem />
  </div>
);

export default PastTodos;
