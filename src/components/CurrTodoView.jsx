import React from 'react';
import TDList from './TDList.jsx';
import TDinput from './TDinput.jsx';
import OptBtn from './OptBtn.jsx';

class currTodoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[],
    };

    this.handleAddToDo = this.handleAddToDo.bind(this)
  }
  
  handleAddToDo(value) {
    this.setState({
      list: [...this.state.list, value],
    });
  }

  render() {
    return (
      <div style={{ border: 'solid', margin: '5px', order: 2, flexGrow: 9 }}>
        <h2>CurrTodoView.jsx</h2>
        <TDList />
        <TDinput addTodo={this.handleAddToDo} />
        <OptBtn />
      </div>
    );
  }
}

export default currTodoView;
