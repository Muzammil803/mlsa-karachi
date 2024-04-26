'use client'
import React from 'react'
import { motion, Variants } from "framer-motion";
const Animate = (props) => {
    const {once,style, children} =props
  return (
    <motion.div
    initial={{ opacity: 0,...style }}
    whileInView={{ opacity: 1,x:0,y:0 }}
    transition={{ duration: 1 }} 
    viewport={{ once: once }}
  >

{children}
  </motion.div>
  )
}

export default Animate