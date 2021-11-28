import React from 'react'
import MoveMenu from './MoveMenu'

class BookDisplay extends React.Component {
  state = {}
  
  imageURL = (book) => {
    return `url(${book.imageLinks.thumbnail})`
  }
  
  render () {
    const { book, updateShelf } = this.props
    if (!book.authors) {console.log(`Undefined authors`); console.log(book)}
    return(
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.imageURL(book) }}></div>
            <MoveMenu book={book} updateShelf={updateShelf}/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors ? (book.authors.join(", ")) : ("Author Unknown")}</div>
        </div>
      </li>
    )
  }
}

export default BookDisplay