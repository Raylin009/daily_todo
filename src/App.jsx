/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';
import CurrTodoView from './components/CurrTodoView.jsx';
import PastTodos from './components/PastTodos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pastTodos:[],
    };

    this.getLists = this.getLists.bind(this);
    // this.getItems = this.getItems.bind(this);
  }

  componentDidMount() {
    //ask db if today's list exist?
      //if so get all records with that id
      //else create new list id and render empty todo
      
    console.log('mounted');
    this.getLists();
  }

  getLists() {
    const limit = 20;
    Axios.get(`/lists/${limit}`)
      .then( data => (console.log(data)))
      .catch( err => (console.error(`App.jsx line 26: ${err}`)))
  };

  render() {
    return (
      <div style={{ border: 'solid', margin: '5px', display: 'flex', alignContent: 'stretch', height: '1000px'}}>
        <CurrTodoView />
        <PastTodos />
      </div>
    );
  }
}

export default App;
