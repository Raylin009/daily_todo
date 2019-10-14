import React from 'react';

class TDinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetInput = this.resetInput.bind(this);
  }

  handleChange(e) {
    this.setState({ description: e.target.value });
  }

  resetInput() {
    this.setState({
      description: '',
    });
  }

  handleSubmit() {
    const { add } = this.props;
    const { description } = this.state;

    event.preventDefault();
    if (description.length !== 0) {
      const submitInfo = {
        description,
        create_at: new Date().toISOString(),
      };
      add(submitInfo);
      this.resetInput();
    }
  }

  render() {
    const { description } = this.state;

    return (
      <div>
        <form>
          <input name="addToDo" type="text" value={description} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default TDinput;
