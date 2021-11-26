import React from 'react'
import Shelf from './Shelf'

class MyReadsView extends React.Component {
  state = {}
  
  getShelfTitle = (key) => {
    console.log(key)
    if (key === "read") {
      return "Read"
    } else if (key === "currentlyReading") {
      return "Currently Reading"
    } else if (key === "wantToRead") {
      return "Want to Read"
    } else {
      return ""
    }
  }
  
  render () {
    const { shelvedBooks } = this.props
    console.log(shelvedBooks)
    return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.entries(shelvedBooks).map(([ shelfName, booksOnShelf ]) => (<Shelf key={shelfName} shelfTitle={this.getShelfTitle(shelfName)} books={booksOnShelf}/>))}
              </div>
            </div>
            <div className="open-search">
              <a>Add a book</a>
            </div>
          </div>
    )
  }
}

export default MyReadsView