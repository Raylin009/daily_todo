import React from 'react';
import Axios from 'axios';
import TDList from './TDList.jsx';
import TDinput from './TDinput.jsx';

class currTodoView extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleComplete = this.handleComplete.bind(this);
  }

  handleAddToDo(inputObj) {
    let { listid, getItems, todoItems } = this.props;
    const { description, create_at } = inputObj;
    const orderinlist = todoItems ? todoItems.length : 1;

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
    const { todoItems, listName, listDate } = this.props;
    return (
      <div style={{ margin: '5px', order: 2, flexGrow: 9 }}>
        <h2>{ listName || 'Loading Name...'}</h2>
        <h5>{new Date(listDate).toString().split(' ').slice(0, 4).join(' ') || 'Loading Date...'}</h5>
        <TDList list={todoItems || []} rmFunc={this.handleRemove} compFunc={this.handleComplete} />
        <TDinput add={this.handleAddToDo} />
      </div>
    );
  }
}

export default currTodoView;
