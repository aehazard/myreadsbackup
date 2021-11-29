import React from 'react'
import SearchView from './SearchView'
import MyReadsView from './MyReadsView'
import * as BooksAPI from './BooksAPI'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
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
    shelvedBooksById: {}
  }
  
  toggleView = () => {
    if (this.state.showSearchPage) {
      this.setState({ showSearchPage: false})
    } else {
      this.setState({ showSearchPage: true})
    }
  }
  
  getShelvedBookData = () => {
    BooksAPI.getAll().then( allBookData => {
      const shelvedBooks = {
        currentlyReading: allBookData.filter(book => book.shelf === "currentlyReading"),
        wantToRead: allBookData.filter(book => book.shelf === "wantToRead"),
        read: allBookData.filter(book => book.shelf === "read")
      }
      const shelvedBooksById = {}
      for (const book of allBookData) {
        shelvedBooksById[book.id] = book
      }
      this.setState({shelvedBooks, shelvedBooksById})
      console.log(shelvedBooks)
      console.log(shelvedBooksById)
    })
  }
  
  componentDidMount() {
    this.getShelvedBookData()
  }
  
  render() {
    return (
      <div className="app">
        <Router>
          <Routes>
            <Route path="/" element={
              <MyReadsView
                toggleView={this.toggleView}
                shelvedBooks={this.state.shelvedBooks}
                refreshView={this.getShelvedBookData}
              />
            } />
            <Route path="/search" element={
              <SearchView
                toggleView={this.toggleView}
                shelvedBooks={this.state.shelvedBooksById}
                refreshView={this.getShelvedBookData}
              />
            } />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default BooksApp
