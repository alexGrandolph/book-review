import './Container.css'
import { useRef } from "react"
import { motion } from "framer-motion"
import bookData from '../../data/books.JSON';
import books from '../../data/books.js';

import ThreeBody from '../../assets/images/3-body.png'
import TheStand from '../../assets/images/the-stand.png'
import Hyperion from '../../assets/images/hyperion.png'

import React from 'react'

const Container = ({ setSelectedBook }) => {

  const constraintsRef = useRef(null);

  function handleDoubleClick(event, book) {
    
    switch (event.detail) {
      case 1:
        console.log("click");
        break;
      case 2:
        // console.log("double click");
        // console.log(book);
        setSelectedBook(book)
        break;
      case 3:
        console.log("triple click");
        break;
    }
  }
  // console.log(books.books)
  const renderBooks = (book) => {
    return (
      <div className="book-container">
        {
          book.map((bk, index) => {
            return (
              <div className="book-box" key ={index}>
                <motion.img 
                src={bk.cover}
                key={index}
                className="book-image"
                alt="book-image"
                drag dragConstraints={constraintsRef} 
                onDoubleClick={() => setSelectedBook(bk)} />
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    // <div className="container-container">
    //   <motion.div className="droppable-area" ref={constraintsRef}>
    //     <motion.img className="book-image" src={TheStand} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={() => setSelectedBook(TheStand)} />
    //     <motion.img className="book-image" src={ThreeBody} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={() => setSelectedBook(ThreeBody)} />
    //     <motion.img className="book-image" src={Hyperion} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={() => setSelectedBook(Hyperion)} />
    //   </motion.div>
    // </div>
    <div className="container-container">
      <motion.div className="droppable-area" ref={constraintsRef}>
        <div>{renderBooks(books.books)}</div>

      </motion.div>
    </div>

  )
}

export default Container