import './Container.css'
import { useRef } from "react"
import { motion } from "framer-motion"

import ThreeBody from '../../assets/images/3-body.png'
import TheStand from '../../assets/images/the-stand.png'
import Hyperion from '../../assets/images/hyperion.png'

import React from 'react'

const Container = () => {
  return (
    <div className="container-container">
      <div className="droppable-area">
       <img className="book-image" src={TheStand} alt="book-cover-image" />
       <img className="book-image" src={ThreeBody} alt="book-cover-image" />
       <img className="book-image" src={Hyperion} alt="book-cover-image" />
      </div>




    </div>
  )
}

export default Container