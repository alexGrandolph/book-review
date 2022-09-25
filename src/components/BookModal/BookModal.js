import './BookModal.css'

import React from 'react'


const BookModal = ({ selectedBook, setSelectedBook}) => {
  
  function handleClick(event) {
    console.log(event.details)
    if(event.target.classList.contains('backdrop')){
      setSelectedBook(null)
    }


  }
  
  return (
    <div className="backdrop" onClick={handleClick}>
      <img  src={selectedBook} alt="book-modal" />
    </div>
  )
}

export default BookModal
// src = { selectedImage }