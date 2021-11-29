import React from 'react'
import BookDisplay from './BookDisplay'

class SearchResults extends React.Component {
  state = {}
  
  mapBookDisplay = (searchResults, refreshView) => {
    if (searchResults.length > 0) {
      return searchResults.map(book => (<BookDisplay key={book.id} book={book} refreshView={refreshView}/>))
    } else {
      console.log("No search results to display")
    }
  }
  
  render () {
    const { searchResults, refreshView } = this.props
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {this.mapBookDisplay(searchResults, refreshView)}
        </ol>
      </div>
    )
  }
}

export default SearchResults