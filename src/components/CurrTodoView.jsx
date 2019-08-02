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
      <div style={{ border: 'solid', margin: '5px', order: 2 ,flexGrow: 9 }}>
        <h2>CurrTodoView.jsx</h2>
        <TDList />
        <TDinput />
        <OptBtn />
      </div>
    );
  }
}

export default currTodoView;
