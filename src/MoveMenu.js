import React from 'react'
import * as BooksAPI from './BooksAPI'

class MoveMenu extends React.Component {
  state = {
    selected: "none",
    menuOptions: [
      {
        text: "Currently Reading",
        value: "currentlyReading"
      },
      {
        text: "Want to Read",
        value: "wantToRead"
      },
      {
        text: "Read",
        value: "read"
      },
      {
        text: "None",
        value: "none"
      }
    ]
  }

  handleChange = event => {
    const shelf = event.target.value
    this.props.updateShelf(this.props.book, shelf)
  }
  
  setSelected = book => {
    if (book.shelf) {
      this.setState({
        selected: book.shelf
      })
    } else {
      this.setState({
        selected: "none"
      })
    }
  }
  
  componentDidMount(){
    this.setSelected(this.props.book)
  }
  
  render () {
    const { book, updateShelf } = this.props      
    return(
      <div className="book-shelf-changer">
        <select value={this.state.selected} onChange={this.handleChange}>
          <option value="move" disabled>Move to...</option>
          {this.state.menuOptions.map(menuOption => (
            <option key={menuOption.value} value={menuOption.value}>{menuOption.text}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default MoveMenu