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
      console.log("shelved books received in props")
      console.log(this.props.shelvedBooks)
      BooksAPI.search(term).then( searchResults => {
        console.log(`getSearchResults with search term ${term} complete`)
        console.log("searchResults:")
        for (const book of searchResults) {
          if (book.id in this.props.shelvedBooks) {
            book.shelf = this.props.shelvedBooks[book.id].shelf
          }
        }
        console.log(searchResults)
        this.setState({ searchResults })
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
    const { toggleView, updateShelf, refreshView } = this.props
    return(
      <div className="search-books">
        <SearchBar
          handleChange={this.handleSearchChange}
          searchTerm={this.state.searchTerm}
          toggleView={toggleView}
        />
        <SearchResults searchResults={this.state.searchResults} refreshView={refreshView}/>
      </div>
    )
  }
}

export default SearchView