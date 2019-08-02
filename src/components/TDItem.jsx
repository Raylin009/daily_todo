import React from 'react';

class TDitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <h4>To Do 1</h4>
        </div>
        <div>
          <h4>To Do 2</h4>
        </div>
        <div>
          <h4>To Do 3</h4>
        </div>
      </div>
    );
  }
}

export default TDitem;
