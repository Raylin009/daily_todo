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
      heroListID: null,
      heroList: {},
      heroTodoListItems: [],
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
            heroListID: data[0].id,
            heroList: data[0],
            heroTodoListItems: [],
          });
        }
      })
      .then(() => this.getItems())
      .catch(err => console.log(`getLists failed ${err}`));
  }

  getItems() {
    const { heroListID } = this.state;

    if (heroListID !== null) {
      Axios.get(`/l/${heroListID}`)
        .then(({ data }) => {
          this.setState({
            heroTodoListItems: data,
          });
        })
        .catch(err => console.log(`getItems failed: ${err}`));
    }
  }

  render() {
    const { lists, heroTodoListItems, heroListID } = this.state;
    return (
      <div style={{ border: 'solid', margin: '5px', display: 'flex', alignContent: 'stretch', height: '1000px'}}>
        <CurrTodoView getItems={this.getItems} listid={heroListID} todoItems={heroTodoListItems} getItems={this.getItems} />
        <PastTodos lists={lists} />
      </div>
    );
  }
}

export default App;
