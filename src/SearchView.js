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
      BooksAPI.search(term).then( searchResults => {
        for (const book of searchResults) {
          if (book.id in this.props.shelvedBooks) {
            book.shelf = this.props.shelvedBooks[book.id].shelf
          }
        }
        this.setState({ searchResults })
      })
    } else {
      this.setState({searchResults: []})
    }
  }
  
  handleSearchChange = event => {
    const term = event.target.value
    this.setState({searchTerm: term})
    this.getSearchResults()
  }
  
  render () {
    const { updateShelf, refreshView } = this.props
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