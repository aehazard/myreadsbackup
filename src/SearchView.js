import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class SearchView extends React.Component {
  state = {
      searchResults: [],
      searchTerm: ""
  };
  
  getSearchResults = () => {
    const term = this.state.searchTerm
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
    this.getSearchResults()
  }
  
  render () {
    const { toggleView, updateShelf } = this.props
    return(
      <div className="search-books">
        <SearchBar
          handleChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}
          toggleView={toggleView}
        />
        <SearchResults searchResults={this.state.searchResults} updateShelf={updateShelf} refreshSourceData={this.getSearchResults}/>
      </div>
    )
  }
}

export default SearchView