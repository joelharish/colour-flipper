import React from 'react'
import './index.css'

const Colour = ({colour, handleClick}) => {
  return (
    <>
      <div className='container' style={{backgroundColor: `${colour}`}}></div>
      <div className='middleContent'>
        <h2>Colour : {colour}</h2>
      </div>
      <button onClick={handleClick}>Flip</button>
    </>
    
  )
}

export default Colour