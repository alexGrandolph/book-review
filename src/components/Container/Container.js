import './Container.css'
import { useRef } from "react"
import { motion } from "framer-motion"

import ThreeBody from '../../assets/images/3-body.png'
import TheStand from '../../assets/images/the-stand.png'
import Hyperion from '../../assets/images/hyperion.png'

import React from 'react'

const Container = () => {

  const constraintsRef = useRef(null);


  return (
    <div className="container-container">
      <motion.div className="droppable-area" ref={constraintsRef}>
        <motion.img className="book-image" src={TheStand} alt="book-cover-image" drag dragConstraints={constraintsRef} />
        <motion.img className="book-image" src={ThreeBody} alt="book-cover-image" drag dragConstraints={constraintsRef} />
        <motion.img className="book-image" src={Hyperion} alt="book-cover-image" drag dragConstraints={constraintsRef} />
      </motion.div>




    </div>
  )
}

export default Container