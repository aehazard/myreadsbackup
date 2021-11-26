import React from 'react'
import * as BooksAPI from './BooksAPI'
import SearchView from './SearchView'
import MyReadsView from './MyReadsView'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    shelvedBooks: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    allBookData: []
  }
  
  componentDidMount() {
    BooksAPI.getAll().then( allBookData => {
      const shelvedBooks = {
        currentlyReading: allBookData.filter(book => book.shelf === "currentlyReading"),
        wantToRead: allBookData.filter(book => book.shelf === "wantToRead"),
        read: allBookData.filter(book => book.shelf === "read")
      }
      this.setState({allBookData, shelvedBooks})
      console.log(shelvedBooks)
    })
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchView/>
        ) : (
          <MyReadsView shelvedBooks={this.state.shelvedBooks}/>
        )}
      </div>
    )
  }
}

export default BooksApp
