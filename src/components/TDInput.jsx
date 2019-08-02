import React from 'react';

class TDinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ val: e.target.value });
  }

  render() {
    return (
      <div style={{ border: 'solid', margin: '5px' }}>
        <h3>TDinput.jsx</h3>
        <form>
          <input name="addToDo" type="text" value={this.state.val} onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

// const TDinput = props => (
//   <div style={{ border: 'solid', margin: '5px' }}>
//     <h3>TDinput.jsx</h3>
//   </div>
// );

export default TDinput;
