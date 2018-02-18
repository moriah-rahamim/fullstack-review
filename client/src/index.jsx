import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }

  }

  search (term) {
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: JSON.stringify({username: term}),
      contentType: 'application/json',
      success: response => {
        console.log(response);
        // TODO: GET request to display updated top 25
      },
      failure: error => console.error(error),
    });
  }

  getTop25(numResults, sortBy, direction) {
    $.ajax({
      method: 'GET',
      url: '/repos',
      success: response => {
        console.log('inside getTop25', response);
      },
      failure: error => console.error(error),
    });
  }

  componentDidMount() {
    this.getTop25(3, 'updated', 'desc');
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));