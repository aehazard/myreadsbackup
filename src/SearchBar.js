import React from 'react'
import { Link } from 'react-router-dom'

class SearchBar extends React.Component {
  render () {
    const { handleChange, searchTerm} = this.props
    return(
      <div className="search-books-bar">
        <Link to="/" className="close-search" >Close</Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={handleChange}
            value={searchTerm}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar