import React from 'react';

class TDitem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.renderComplete = this.renderComplete.bind(this);
    this.exacuteRmFunc = this.exacuteRmFunc.bind(this);
  }

  exacuteRmFunc(e) {
    const { id } = e.target;
    const { rmFunc } = this.props;
    rmFunc(id);
  }

  renderComplete(e) {
    // console.log(e.target.id)
    const { id } = e.target;
    const { compFunc } = this.props;
    compFunc(id);
  }


  render() {
    const { item } = this.props;

    return (
      <div style={{ marginBlockEnd: '5px', marginRight: 'inherit', borderBottom: 'solid', display: 'flex', flexDirection: 'row', height: 24 }}>
        <div id={item.id} onClick={this.renderComplete} style={{ border: 'solid', borderRadius: '100%', width: '18px' }}>
        </div>
        <div style={{ margin: '5px' }}>
          { item.name }
        </div>
        <div id={item.id} onClick={this.exacuteRmFunc} style={{ border: 'solid' }}>
          Delete
        </div>
      </div>
    );
  }
}

export default TDitem;
