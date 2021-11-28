import React from 'react'
import BookDisplay from './BookDisplay'

class Shelf extends React.Component {
  
  render () {
    const { books, shelfTitle, refreshSourceData} = this.props
    console.log(books)
    return(
      <div className="bookshelf">
                  <h2 className="bookshelf-title">{shelfTitle}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {books.map(book => (<BookDisplay key={book.id} book={book} refreshSourceData={refreshSourceData}/>))}
                    </ol>
                  </div>
                </div>
    )
  }
}

export default Shelf