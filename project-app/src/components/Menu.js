import React from 'react'
import Container from 'react-bootstrap/esm/Container'

function Menu({filterByRegion, sortCountries}) {

  
  return (
    <Container className='sort'>
      {/* <Button onClick={() => sortCountries()} size="lg"> </Button> */}
      <div>
        <button onClick={() => sortCountries()}>  Sort A-Z  </button>
      </div>
      <label>Filter by Continent: </label>
        <select onChange={(e) => filterByRegion(e.target.value)}> 
          <option value='All'>All</option>
          <option value='Asia'>Asia</option>
          <option value='North America'>North America</option>
          <option value='South America'>South America</option>
          <option value='Africa'>Africa</option>
          <option value='Europe'>Europe</option>
          <option value='Oceania'>Oceania</option>
          <option value='Antarctic'>Antarctic</option>
        </select>
    </Container>
  )
}

export default Menu