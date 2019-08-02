import React from 'react';

class TDinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ val: e.target.value });
  };

  handleSubmit(v) {
    const { addTodo } = this.props;
    event.preventDefault();
    addTodo(v);
  }

  render() {
    const { val } = this.state;

    return (

      <div style={{ border: 'solid', margin: '5px' }}>
        <h3>TDinput.jsx</h3>
        <form>
          <input name="addToDo" type="text" value={val} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}></button>
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
