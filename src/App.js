import React from 'react'
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
  }
  
  toggleView = () => {
    if (this.state.showSearchPage) {
      this.setState({ showSearchPage: false})
    } else {
      this.setState({ showSearchPage: true})
    }
  }
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchView toggleView={this.toggleView}/>
        ) : (
          <MyReadsView
            toggleView={this.toggleView}
          />
        )}
      </div>
    )
  }
}

export default BooksApp
