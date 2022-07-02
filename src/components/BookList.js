import React from 'react'
import BookCard from './BookCard'

function BookList({books , handleDelete, handleClick}) {
    const bookSale = books.map(book => <BookCard key={book.id} book={book} handleDelete={handleDelete} handleClick={handleClick}/>)

    return (
        <ul className='cards'>
            
            {bookSale}
        </ul>
    )
}

export default BookList