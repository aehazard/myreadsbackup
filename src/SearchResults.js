import React from 'react'
import BookDisplay from './BookDisplay'

class SearchResults extends React.Component {
  render () {
    const { searchResults, refreshView } = this.props
    return(
      <div className="search-books-results">
        <ol className="books-grid">
          {(searchResults.length > 0) && searchResults.map(book => (
            <BookDisplay key={book.id} book={book} refreshView={refreshView}/>
          ))}
        </ol>
      </div>
    )
  }
}

export default SearchResults