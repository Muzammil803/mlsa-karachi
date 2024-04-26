import React from 'react'
import NewsCarousel from './carousel/NewsCarousel'
import Animate from './carousel/Animate'

const Section3 = () => {
  return (
    <Animate style={{y:'-100%'}} once={true}>
      <div><NewsCarousel/></div>
    </Animate>

  )
}

export default Section3