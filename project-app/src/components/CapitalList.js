import React, { useState } from 'react'
import CapitalCard from './CapitalCard.js'

function CapitalList({countries, updateVisited, updateFavs}) {

// console.log(capitals)
  return (
    <div className='cards'>
      {countries.map((el,i) => <CapitalCard key={i} country={el} currency={el.currencies} updateVisited={updateVisited} updateFavs={updateFavs}/>)}
    </div>
  )
}

export default CapitalList