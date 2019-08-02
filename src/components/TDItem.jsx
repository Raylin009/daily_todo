import React from 'react';

class TDitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ marginBlockEnd: '5px', marginRight: 'inherit', borderBottom: 'solid', display: 'flex', flexDirection: 'row' }}>
        <div style={{ border: 'solid', borderRadius: '100%', width: '18px' }}>
          <br></br>
        </div>
        <div>
          Content
        </div>
      </div>
    );
  }
}

export default TDitem;
