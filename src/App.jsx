/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import React from 'react';
import Axios from 'axios';
import Moment from 'moment';
import CurrTodoView from './components/CurrTodoView.jsx';
import PastTodos from './components/PastTodos.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [],
      heroListID: null,
      heroTodoListItems: [],
    };

    this.initList = this.initList.bind(this);
    this.getLists = this.getLists.bind(this);
    this.getItems = this.getItems.bind(this);
    this.handleListSelection = this.handleListSelection.bind(this);
  }

  componentDidMount() {
    this.initList();
  }

  getLists() {
    Axios.get('/lists/all')
      .then(({ data }) => {
        if (data.length) {
          this.setState({
            lists: data,
            heroListID: data[0].id,
            heroListName: data[0].name,
            heroListDate: data[0].date,
            heroTodoListItems: [],
          });
        }
        return data[0].id;
      })
      .then(id => this.getItems(id))
      .catch(err => console.log(`getLists failed ${err}`));
  }

  getItems(id) {
    if (id !== null) {
      Axios.get(`/l/${id}`)
        .then(({ data }) => {
          this.setState({
            heroTodoListItems: data,
          });
        })
        .catch(err => console.log(`getItems failed: ${err}`));
    }
  }

  initList() {
    const getDateString = string => (string.slice(0, string.indexOf('T')));
    let today = Moment().format();
    let tomorrow = Moment().add(1, 'days').format();

    today = getDateString(today);
    tomorrow = getDateString(tomorrow);

    Axios.post('./initList', { today, tomorrow })
      .then(() => this.getLists())
      .catch(console.log);
  }

  handleListSelection(listID, listName, listDate) {
    this.setState({
      heroListID: listID,
      heroListName: listName,
      heroListDate: listDate,
    }, () => (this.getItems(listID)));
  }

  render() {
    const {
      lists,
      heroTodoListItems,
      heroListID,
      heroListName,
      heroListDate,
    } = this.state;

    return (
      <div style={{ border: 'solid', margin: '5px', display: 'flex', alignContent: 'stretch', height: '1000px'}}>
        <CurrTodoView
          getItems={this.getItems}
          listid={heroListID}
          listName={heroListName}
          listDate={heroListDate}
          todoItems={heroTodoListItems}
        />
        <PastTodos listSelection={this.handleListSelection} lists={lists} />
      </div>
    );
  }
}

export default App;
