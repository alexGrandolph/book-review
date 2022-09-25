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
      <p>{selectedBook.title}</p>
    </div>
  )
}

export default BookModal
// src = { selectedImage }