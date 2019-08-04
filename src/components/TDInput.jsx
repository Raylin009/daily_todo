import React from 'react';

class TDinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange(e) {
    this.setState({ val: e.target.value });
  }

  resetInput() {
    this.setState({
      val: '',
    });
  }

  handleSubmit(e) {
    const { add } = this.props;
    const { val } = this.state;

    event.preventDefault();
    if (val.length !== 0) {
      add(val, Date.now());
      this.resetInput();
    }
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

export default TDinput;
