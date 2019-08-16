import React from 'react';

// const PTDItem = ({ id, name }) => (
//   <div
//     key={id}
//     style={{ border: 'solid', margin: '5px' }}
//   >
//     <h3>{name}</h3>
//     <div hidden={false}>X</div>
//   </div>
// );

class PTDItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideDelete: true,
    };
    this.toggleDelete = this.toggleDelete.bind(this);
  }

  toggleDelete() {
    const { hideDelete } = this.state;
    this.setState({
      hideDelete: !hideDelete,
    });
  }

  render() {
    const { id, name, date } = this.props;
    const { hideDelete } = this.state;

    return (
      <div
        onMouseEnter={this.toggleDelete}
        onMouseLeave={this.toggleDelete}
        onClick={() => (this.props.listSelection( id, name, date ))}
        key={id}
        style={{ border: 'solid', margin: '5px' }}
      >
        <h3>{ name }</h3>
        <div 
          hidden={hideDelete}
        >X</div>
      </div>
    );
  }

}

export default PTDItem;
