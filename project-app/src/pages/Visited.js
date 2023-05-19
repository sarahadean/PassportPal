import React, { useState, useEffect } from 'react'
import VisitedCard from '../components/VisitedCard'

function Visited() {
  
const [visitList, setVisitList] = useState([])


///Taking info from form and going through visited list to find matching country
function updatePassport(newEntry){
  setVisitList([...visitList].map(curVisit => {
    if (curVisit.id === newEntry.id) {
      return {...curVisit,
            newEntry} 
      } else {
            return curVisit
          }    
    }))
  }

  const baseUrl = "http://localhost:3330"
  const vistedUrl = baseUrl + "/visited"


  ///GET request for visited countries

  useEffect(() => {getVisitedCountries()},[])

  
  function getVisitedCountries(){
    fetch('http://localhost:3330/visited')
    .then(r => r.json())
    .then(visitList => setVisitList(visitList))
  }
  

  return (
    <div>
      <h1>Your Virtual Passport</h1>
      {visitList.map(el => <VisitedCard 
      visitEntry={el} 
      key={el.id} 
      updatePassport={updatePassport} 
      />)}
    </div>
  )
}

export default Visited