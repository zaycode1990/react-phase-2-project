import React from 'react'
import BookList from './BookList'




function BookStore({books, handleDelete, handleClick}){
  const headingStyle = {
     textAlign: "center"
  }


console.log(books)
  return (
    <div>

      <h1 style={headingStyle}>Books for sale</h1>
<BookList books={books} handleDelete={handleDelete} handleClick={handleClick}/>

    </div>
  )
}

export default BookStore