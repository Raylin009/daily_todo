import React from 'react';
import CurrTodoView from './components/CurrTodoView.jsx';

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
      </div>
    );
  }
}

export default App;
