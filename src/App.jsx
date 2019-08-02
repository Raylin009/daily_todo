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
      <div>
        <h1>App Component Established</h1>
        <CurrTodoView />
        <PastTodos />
      </div>
    );
  }
}

export default App;
