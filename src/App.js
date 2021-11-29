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
    shelvedBooks: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    shelvedBooksById: {}
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
                shelvedBooks={this.state.shelvedBooks}
                refreshView={this.getShelvedBookData}
              />
            } />
            <Route path="/search" element={
              <SearchView
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
