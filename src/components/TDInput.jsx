import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
// import checkMar from '../img/check_circle_outline-24px.svg'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

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
