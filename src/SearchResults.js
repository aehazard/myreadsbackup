import React from 'react'
import BookDisplay from './BookDisplay'

class SearchResults extends React.Component {
  state = {}
  
  mapBookDisplay = (searchResults, refreshSourceData) => {
    if (searchResults.length > 0) {
      console.log("Displaying search results...")
      console.log(searchResults)
      return searchResults.map(book => (<BookDisplay key={book.id} book={book} refreshSourceData={refreshSourceData}/>))
    } else {
      console.log("No search results to display")
    }
  }
  
  render () {
    const { searchResults, refreshSourceData } = this.props
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {this.mapBookDisplay(searchResults, refreshSourceData)}
        </ol>
      </div>
    )
  }
}

export default SearchResults