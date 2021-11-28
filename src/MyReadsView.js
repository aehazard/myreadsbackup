import React from 'react'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class MyReadsView extends React.Component {
  state = {
    shelvedBooks: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
  }
  
  getShelvedBookData = () => {
    BooksAPI.getAll().then( allBookData => {
      const shelvedBooks = {
        currentlyReading: allBookData.filter(book => book.shelf === "currentlyReading"),
        wantToRead: allBookData.filter(book => book.shelf === "wantToRead"),
        read: allBookData.filter(book => book.shelf === "read")
      }
      this.setState({shelvedBooks})
      console.log(shelvedBooks)
    })
  }
  
  componentDidMount() {
    this.getShelvedBookData()
  }
  
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
    const { toggleView } = this.props
    return(
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {Object.entries(this.state.shelvedBooks).map(([ shelfName, booksOnShelf ]) => (<Shelf key={shelfName} shelfTitle={this.getShelfTitle(shelfName)} books={booksOnShelf} refreshSourceData={this.getShelvedBookData}/>))}
              </div>
            </div>
            <div className="open-search">
              <a onClick={toggleView}>Add a book</a>
            </div>
          </div>
    )
  }
}

export default MyReadsView