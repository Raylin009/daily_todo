import React from 'react';

const completeStatus = { border: 'solid', borderRadius: '100%', width: '18px' };

const renderCompStatus = (status) => {
  const done = {
    border: 'solid', borderRadius: '100%', width: '18px', background: 'black'
  };
  const notDone = { border: 'solid', borderRadius: '100%', width: '18px' };

  return status ? done : notDone;
};

class TDitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleComplete = this.toggleComplete.bind(this);
    this.exacuteRmFunc = this.exacuteRmFunc.bind(this);
  }

  exacuteRmFunc(e) {
    const { id } = e.target;
    const { rmFunc } = this.props;
    rmFunc(id);
  }

  toggleComplete(e) {
    const { id } = e.target;
    const { compFunc } = this.props;
    compFunc(id, this.props.item.complete);
  }


  render() {
    const { item } = this.props;

    return (
      <div style={{ marginBlockEnd: '5px', marginRight: 'inherit', borderBottom: 'solid', display: 'flex', flexDirection: 'row', height: 24 }}>
        <div id={item.id} onClick={this.toggleComplete} style={ renderCompStatus(item.complete) } ></div>
        <div style={{ margin: '5px' }}>
          { item.description }
        </div>
        <div id={item.id} onClick={this.exacuteRmFunc} style={{ border: 'solid' }}>
          Delete
        </div>
      </div>
    );
  }
}

export default TDitem;
