import React from 'react'
import BookDisplay from './BookDisplay'

class SearchResults extends React.Component {
  state = {}
  
  mapBookDisplay = searchResults => {
    if (searchResults.length > 0) {
      console.log("Displaying search results...")
      console.log(searchResults)
      return searchResults.map(book => (<BookDisplay key={book.id} book={book}/>))
    } else {
      console.log("No search results to display")
    }
  }
  
  render () {
    const { searchResults } = this.props
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {this.mapBookDisplay(searchResults)}
        </ol>
      </div>
    )
  }
}

export default SearchResults