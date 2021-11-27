import React from 'react'

class SearchBar extends React.Component {
  /*
  handleChange = event => {
    const newSearchTerm = event.target.value
    this.props.sendSearch(newSearchTerm)
  }
  */
  
  render () {
    const { handleChange, searchTerm, toggleView } = this.props
    return(
      <div className="search-books-bar">
        <a onClick={toggleView} className="close-search" >Close</a>
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