import React from 'react'
import SearchBar from './SearchBar'

function Menu({search, handleSearch, filterByRegion, sortCountries, handleSort}) {

  
  return (
    <div>
      <SearchBar search={search} handleSearch={handleSearch}/>
      <button onClick={() => sortCountries()}>Sort A-Z</button>
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

    </div>
  )
}

export default Menu