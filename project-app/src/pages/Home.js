import React, { useState, useEffect } from 'react'
import CapitalList from './../components/CapitalList'
import Menu from './../components/Menu'


function Home({updateVisited}) {

  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [selectedContinent, setContinent] = useState('All')
  // const [display, setDisplay] = useState([])


useEffect(() => {getCountries()},[])

  function getCountries(){
    fetch('http://localhost:3330/countries')
    .then(resp => resp.json())
    .then((countries) => setCountries(countries))
  }

///search functionality
  const handleSearch = (newStr) => {
    setSearch(newStr)
  }

  ///updating countries state to be searchable and filterable by continents
  const filteredCountries = [...countries].filter(country => 
  (country.continents[0] === selectedContinent || selectedContinent === "All") 
  &&
  (country.name.common.toLowerCase().includes(search.toLowerCase()))
  )

////sort alphabetically///////
  function sortCountries(){
    setCountries(countries.toSorted((a,b) => 
    a.name.common > b.name.common ? 1 : -1))
  }

  ///filter by continent:
  function filterByRegion(newSel){
      setContinent(newSel)
    } 

    return (
      <div>
        <Menu filterByRegion={filterByRegion} search={search} handleSearch={handleSearch} sortCountries={sortCountries} />
        <CapitalList countries={filteredCountries} updateVisited={updateVisited}/>
      </div>
    )
  }
export default Home