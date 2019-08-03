import React from 'react';
import TDitem from './TDitem.jsx';

const TDList = props => (
  <div style={{ border: 'solid', margin: '5px' }}>
    <h3>TDList.jsx</h3>
    {props.list.map((ele) => { return <TDitem item={ele} rmFunc={props.rmFunc} compFunc={props.compFunc} /> })}
  </div>
);

export default TDList;
