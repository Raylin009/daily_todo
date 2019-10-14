import React from 'react';
import TDitem from './TDitem.jsx';

const TDList = props => (
  <div>
    {props.list.map((ele) => { return <TDitem key={ele.id} item={ele} rmFunc={props.rmFunc} compFunc={props.compFunc} /> })}
  </div>
);

export default TDList;
