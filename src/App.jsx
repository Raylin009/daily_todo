import React from 'react';
import CurrTodoView from './components/CurrTodoView.jsx';
import PastTodos from './components/PastTodos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // pastTodos:[],
    };
  }

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
