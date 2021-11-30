import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

class SearchView extends React.Component {
  state = {
      searchResults: [],
      searchTerm: ""
  };
  
  /**
  * @description Fetches books matching search term from API and updates the SearchView component state
  */
  getSearchResults = (term) => {
    if(!term) {
      console.log("Clearing search results, no term entered")
      this.setState({searchResults: []})
    } else {
      BooksAPI.search(term).then(searchResults => {
        if (searchResults["error"]) {
          console.log(`Error from API: ${searchResults["error"]}`)
          console.log("Clearing search results, no results returned")
          this.setState({searchResults: []})
        } else {
          for (const book of searchResults) {
            if (book.id in this.props.shelvedBooks) {
              book.shelf = this.props.shelvedBooks[book.id].shelf
            }
          }
          this.setState({ searchResults })
        }
      })
    }
  }
  
  /**
  * @description Handles a change in the search input by triggering getSearchResults and updating the searchTerm in in the SearchView component state
  */
  handleSearchChange = event => {
    const term = event.target.value
    this.setState({searchTerm: term})
    this.getSearchResults(term)
  }
  
  render () {
    const { refreshView } = this.props
    return(
      <div className="search-books">
        <SearchBar
          handleChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}
        />
        <SearchResults searchResults={this.state.searchResults} refreshView={refreshView}/>
      </div>
    )
  }
}

export default SearchView