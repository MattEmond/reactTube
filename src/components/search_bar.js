import React, { Component } from 'react';


//Generate HTML search bar that user can type into
//Only class based components have state
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          placeholder="Search"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar;
