import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class SearchView extends React.Component {
  state = {
      searchResults: [],
      searchTerm: ""
  };
  
  getSearchResults = term => {
    if (term) {
      console.log(`begin getSearchResults with search term ${this.state.searchTerm}`)
      BooksAPI.search(term).then( searchResults => {
        console.log(`getSearchResults with search term ${term} complete`)
        this.setState({searchResults: searchResults})
        console.log("searchResults:")
        console.log(searchResults)
      })
    } else {
      console.log(`No search term set`)
      this.setState({searchResults: []})
    }
  }
  
  handleSearchChange = event => {
    const term = event.target.value
    console.log(`Setting SearchView state for searchTerm to ${term}`)
    this.setState({searchTerm: term})
    this.getSearchResults(term)
  }
  
  render () {
    return(
      <div className="search-books">
        <SearchBar handleChange={this.handleSearchChange} searchTerm={this.state.searchTerm}/>
        <SearchResults searchResults={this.state.searchResults}/>
      </div>
    )
  }
}

export default SearchView