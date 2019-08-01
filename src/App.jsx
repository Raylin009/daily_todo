import React from 'react';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      pastTodos: [],
    }
  }

  render() {
    return (
      <div>
        <h1>App Component Established</h1>
      </div>
    )
  }
}

export default App;
