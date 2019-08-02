import React from 'react';
import TDList from './TDList.jsx';
import TDinput from './TDinput.jsx';
import OptBtn from './OptBtn.jsx';

class currTodoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Current Todo View</h2>
        <TDList />
        <TDinput />
        <OptBtn />
      </div>
    );
  }
}

export default currTodoView;
