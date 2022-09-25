import './BookModal.css'

import React from 'react'


const BookModal = ({ selectedBook, setSelectedBook}) => {
  console.log(selectedBook.title)
  function handleClick(event) {
    
    if(event.target.classList.contains('backdrop')){
      setSelectedBook(null)
    }


  }
  
  return (
    <div className="backdrop" onClick={handleClick}>
      <img  src={selectedBook.cover} alt="book-modal" />
      <div className="book-text">
        <p className="book-title"> {selectedBook.title}</p>
        <p>Official Alex Ranking: {selectedBook.rating}</p>
        <p>Official Alex Review: {selectedBook.review}</p>
      </div>
    </div>
  )
}

export default BookModal
// src = { selectedImage }