import React from 'react';
import TDList from './TDList.jsx';
import TDinput from './TDinput.jsx';
import OptBtn from './OptBtn.jsx';

class ToDoObj {
  constructor(description, id) {
    this.id = id;
    this.description = description;
    this.complete = false;
    this.orderinlist = 'LOW';
  }

  toggle() {
    this.complete = !this.complete;
  }
}

class currTodoView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };

    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleAddToDo(value, id) {
    const todo = new ToDoObj(value, id);

    this.setState({
      list: [...this.state.list, todo],
    });
  }

  handleRemove(id) {
    const { list } = this.state;
    this.setState({
      list: [...list.filter(ele => ele.id !== parseInt(id))],
    });
  }

  handleComplete(id) {
    const newState = this.state.list.map(
      (ele) => {
        if (ele.id === parseInt(id)) {
          ele.toggle();
        }
        return ele;
      },
    );
    this.setState({
      list: [...newState],
    });
  }

  render() {
    return (
      <div style={{ border: 'solid', margin: '5px', order: 2, flexGrow: 9 }}>
        <h2>CurrTodoView.jsx</h2>
        <TDList list={this.props.todoItems || []} rmFunc={this.handleRemove} compFunc={this.handleComplete} />
        <TDinput add={this.handleAddToDo} />
        <OptBtn />
        {console.log(this.props.todoItems)}
      </div>
    );
  }
}

export default currTodoView;
