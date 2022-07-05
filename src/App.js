import React, { useEffect, useState} from 'react'
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import BookStore from './components/BookStore';
import BookInventoryAddition from './components/BookInventoryAddition'
import BookCart from './components/BookCart';


function App() {

  const [books, setBooks] = useState([])
  const [booksInCart, setBooksInCart] = useState([])

  // const []

  // const context = useContext()



  useEffect(() => {
    fetch('http://localhost:4000/books')
      .then(res => res.json())
      .then(bookData => setBooks(bookData))
  }, [])

  const handleDelete = (id) => {
    const bookListings = books.filter(bookItem => bookItem.id !== id)
    setBooks(bookListings)

    fetch(`http://localhost:4000/books/${id}`
      , {

        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .catch((err) => console.log(err))
  }

  const handleClick = (book) => {
    setBooksInCart([...booksInCart, book])
  }




  const booksUpdate = (book) => {
    setBooks([...books, book])
  }

  return (
    <>
      <NavBar />
      <Routes>
      
        <Route path="/home" index element={<BookStore books={books} handleDelete={handleDelete} handleClick={handleClick} />} />
        <Route path="inventory" element={<BookInventoryAddition booksUpdate={booksUpdate} />} />
        <Route path="cart" element={<BookCart booksInCart={booksInCart} />} />
      </Routes>
    </>
  );
}

export default App;
