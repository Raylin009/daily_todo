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
    };

    this.getLists = this.getLists.bind(this);
    // this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    console.log('mounted');
    this.getLists();
  }

  getLists() {
    Axios.get('/lists/all')
      .then(({ data }) => {
        this.setState({ lists: data });
      })
      .catch(err => console.log(`getLists failed ${err}`));
  }


  render() {
    const { lists } = this.state;
    return (
      <div style={{ border: 'solid', margin: '5px', display: 'flex', alignContent: 'stretch', height: '1000px'}}>
        <CurrTodoView />
        <PastTodos lists={lists} />
      </div>
    );
  }
}

export default App;
