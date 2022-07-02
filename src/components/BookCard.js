import React from 'react'


function BookCard({book, handleDelete, handleClick}) {

    

 

  return (
    <li className="card">
      <div className="image">
        <span className="price">${book.price}</span>
        <img src={book.img} alt={book.title} />
      </div>
      <div className="details">
  
    <button onClick={()=>handleClick(book)} className="emoji-button favorite active">Add to Cart</button>
        
      
        

        <br/>
        <p><strong>{book.title}</strong> by <emp>{book.author}</emp> </p>
        <span>Book Edition : {book.edition}</span>
        <p>Item in stock: {book.stock}</p>
        <button onClick={() => {handleDelete(book.id)}} className="emoji-button delete">🗑</button>
      </div>
    </li>
  )
}

export default BookCard