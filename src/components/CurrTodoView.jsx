import React from 'react';
import Axios from 'axios';
import TDList from './TDList.jsx';
import TDinput from './TDinput.jsx';
import OptBtn from './OptBtn.jsx';

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

  handleAddToDo(inputObj) {
    let { listid, getItems, todoItems } = this.props;
    const { description, create_at } = inputObj;
    const orderinlist = todoItems ? todoItems.length : 1 ;

    Axios.post('/addtask', {
      description, orderinlist, listid, create_at,
    })
      .then(() => getItems(listid))
      .catch(err => console.log(err));
  }

  handleRemove(id) {
    const { getItems, listid } = this.props;
    Axios.delete(`/rm/${id}`)
      .then(() => getItems(listid))
      .catch(err => console.log(err));
  }

  handleComplete(id, completeStatus) {
    const { getItems, listid } = this.props;
    Axios.patch(`./complete/${id}`, { complete: !completeStatus })
      .then(() => getItems(listid))
      .catch(err => console.log(err));
  }

  render() {
    const { todoItems } = this.props;
    return (
      <div style={{ border: 'solid', margin: '5px', order: 2, flexGrow: 9 }}>
        <h2>CurrTodoView.jsx</h2>
        <TDList list={todoItems || []} rmFunc={this.handleRemove} compFunc={this.handleComplete} />
        <TDinput add={this.handleAddToDo} />
        <OptBtn />
        {/* {console.log(todoItems)} */}
        {/* {this.handleAddToDo(1111, "test handleAddToDo", 3, 22222)} */}
      </div>
    );
  }
}

export default currTodoView;
