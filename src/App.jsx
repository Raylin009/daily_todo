/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';
import CurrTodoView from './components/CurrTodoView.jsx';
import PastTodos from './components/PastTodos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      heroList: {},
      heroTodoItems: [],
    };

    this.getLists = this.getLists.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    this.getLists();
  }

  getLists() {
    Axios.get('/lists/all')
      .then(({ data }) => {
        if (data.length) {
          this.setState({
            lists: data,
            heroList: data[0],
            heroTodoListItems: [],
          });
        }
        return data[0].id;
      })
      .then(listID => this.getItems(listID))
      .catch(err => console.log(`getLists failed ${err}`));
  }

  getItems(id) {
    Axios.get(`/l/${id}`)
      .then(({ data }) => {
        this.setState({
          heroTodoListItems: data,
        })
      })
      .catch(err => console.log(`getItems failed: ${err}`));
  }

  render() {
    const { lists, heroTodoListItems } = this.state;
    return (
      <div style={{ border: 'solid', margin: '5px', display: 'flex', alignContent: 'stretch', height: '1000px'}}>
        <CurrTodoView todoItems={heroTodoListItems} />
        <PastTodos lists={lists} />
      </div>
    );
  }
}

export default App;
