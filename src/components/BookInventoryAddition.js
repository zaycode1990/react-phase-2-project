import React, { useState } from 'react'


function BookInventoryAddition({ booksUpdate }) {

  const h1Style = {
    textAlign: "center",
    marginTop: "5%",
  }




  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [edition, setEdition] = useState("")
  const [price, setPrice] = useState("")
  const [img, setImg] = useState("")
  const [stock, setStock] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    const bookData = {
      title,
      author,
      edition,
      price,
      img,
      stock
    }
    fetch('http://localhost:4000/books', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    });

    booksUpdate(bookData)
  }

  return (
    <div>


      <h1 style={h1Style}>Add Books to inventory</h1>


      <form label="Add to book inventory" className='formStyle' onSubmit={handleSubmit}>
        <input type="text" required placeholder='title' value={title} onChange={(e) => { setTitle(e.target.value) }} />
        <input type="text" required placeholder='author' value={author} onChange={(e) => { setAuthor(e.target.value) }} />
        <input type="text" required placeholder='edition' value={edition} onChange={(e) => { setEdition(e.target.value) }} />
        <input type="number" required placeholder='price' value={price} onChange={(e) => {
           setPrice(parseFloat(e.target.value)) 
           }} />
        <input type="text" required placeholder='img' value={img} onChange={(e) => { setImg(e.target.value) }} />
        <input type="number" required placeholder='stock' value={stock} onChange={(e) => {setStock(parseFloat(e.target.value)) }} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BookInventoryAddition
