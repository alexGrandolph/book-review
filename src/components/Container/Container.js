import './Container.css'
import { useRef } from "react"
import { motion } from "framer-motion"

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
        console.log("double click");
        console.log(book);
        setSelectedBook(book)
        break;
      case 3:
        console.log("triple click");
        break;
    }
  }

  return (
    <div className="container-container">
      <motion.div className="droppable-area" ref={constraintsRef}>
        <motion.img className="book-image" src={TheStand} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={() => setSelectedBook(TheStand)} />
        {/* <motion.img className="book-image" src={TheStand} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={handleDoubleClick(TheStand)} /> */}
        <motion.img className="book-image" src={ThreeBody} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={() => setSelectedBook(ThreeBody)} />
        {/* <motion.img className="book-image" src={ThreeBody} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={handleDoubleClick} /> */}
        <motion.img className="book-image" src={Hyperion} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={() => setSelectedBook(Hyperion)} />
        {/* <motion.img className="book-image" src={Hyperion} alt="book-cover-image" drag dragConstraints={constraintsRef} onDoubleClick={handleDoubleClick} /> */}
      </motion.div>




    </div>
  )
}

export default Container