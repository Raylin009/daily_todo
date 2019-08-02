import React from 'react';

class OptBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ border: 'solid', margin: '5px', position: 'fixed', right: '25px', bottom: '1px', display: 'flex', flexDirection: 'column'}}>
        <button>Print</button>
        <button>Send</button>
      </div>
    );
  }
}

export default OptBtn;
