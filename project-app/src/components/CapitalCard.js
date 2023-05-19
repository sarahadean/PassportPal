import React, { useState } from 'react'

// {
//   "flags": {
//       "png": "https://flagcdn.com/w320/kw.png",
//       "svg": "https://flagcdn.com/kw.svg",
//       "alt": "The flag of Kuwait is composed of three equal horizontal bands of green, white and red, with a black trapezium superimposed on the hoist side of the field. This trapezium has its base on the hoist end and spans about one-fourth the width of the field."
//   },
//   "name": {
//       "common": "Kuwait",
//       "official": "State of Kuwait",
//       "nativeName": {
//           "ara": {
//               "official": "دولة الكويت",
//               "common": "الكويت"
//           }
//       }
//   },
//   "currencies": {
//       "KWD": {
//           "name": "Kuwaiti dinar",
//           "symbol": "د.ك"
//       }
//   },
//   "capital": [
//       "Kuwait City"
//   ],
//   "region": "Asia",
//   "languages": {
//       "ara": "Arabic"
//   },
//   "continents": [
//       "Asia"
//   ]
// },

// ********TASK: SHOW CURRENCIES FOR EACH COUNTRY


function CapitalCard({country, updateVisited, updateFavs}) {

  const [isToggled, setToggle] = useState(false)
  const [isBucket, setBucket] = useState(false)

  // let currencyName = Object.values(currency)[0].name
  // console.log(currency)
  const {flags: {png}, flags: {alt}, name: {common}, capital, continents} = country

  // const {name, symbol} = currency

  
  ///POST REQUEST TO ADD COUNTRY AND FLAG TO 'VISITED' SUCCESSFUL BUT ONLY SHOWING ID IN DB.JSON
function handleVisit(){
  let data = {
    country: common,
    flag: png
  }
  setToggle(prev => !prev)
  fetch(`http://localhost:3330/visited`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'content-type':'application/json'}
  })
  .then(r => r.json())
  .then(data => updateVisited(data))
}


////POST REQUEST TO ADD TO BUCKETLIST/////

function handleFavs(){
  let data = {
    flag: png,
    country: common,
    continent: continents
  }
  setBucket(prev => !prev)
  fetch('http://localhost:3330/favorites', {
    method: 'POST',
    headers:{
      'content-type':'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(r => r.json())
  .then(data => updateFavs(data))
}



  return (
    // <Card style={{width: '18rem'}}>
    //   <Card.Img variant="top" src={png} />
    //   <Card.Body>
    //     <Card.Title>{common}</Card.Title>
    //     <Card.Text>
    //       Capital: {capital}
    //       {continents}
    //     </Card.Text>
    //     <Button variant="primary" onClick={() => handleVisit()}>Add to Passport</Button>
    //     <Button variant="secondary" onClick={() => handleVisit()}>Add to Bucket List</Button>
    <div className='card'>

      <span className='flag'>
        <img className='flag' src={png} alt={alt}/>
      </span>
      <h3>{common}</h3>
      <ul className='country-info'>
      <li>Capital:{capital}</li>
      <li>{continents}</li> 
      </ul>
      {isToggled ? 
      <p> Added to your passport!</p> 
      : 
      <button id="visited" className='button' onClick={() => handleVisit()}>Add to Passport</button>}

      {isBucket ?  "Added to your Bucketlist!" :
      <button id="add_to_bucket" className='button'onClick={() => handleFavs()}>Add to Bucketlist</button>}
    </div>
    // </Card.Body>
    // </Card>
  )
}

export default CapitalCard