import React from 'react'
import MoveMenu from './MoveMenu'

class BookDisplay extends React.Component {
  state = {}
  
  imageURL = (book) => {
    if (book.imageLinks) {
      return `url(${book.imageLinks.thumbnail})`
    } else {
      return "none"
    }
  }
  
  render () {
    const { book, refreshView } = this.props
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.imageURL(book) }}></div>
            <MoveMenu book={book} refreshView={refreshView}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? (book.authors.join(", ")) : ("")}</div>
        </div>
      </li>
    )
  }
}

export default BookDisplay