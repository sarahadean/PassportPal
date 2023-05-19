import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack'

/* 
separate component for form
form state updates to another edit state that will persist?
setting edit state will include a post request
*/


function VisitedCard({visitEntry, updatePassport}) {

const formOutline ={
    image: '',
    cities:'',
    date: '',
    memories: ''
  }
const [form, setForm] = useState(formOutline)

    const {country, flag, memories, cities, image, date} = visitEntry

    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:3330/visited/${visitEntry.id}`,{
            method: 'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify({
                "image": form.image,
                "cities": form.cities,
                "date": form.date,
                "memories": form.memories
            })
        })
        .then(r => r.json())
        .then(data => {
            updatePassport(data)
            console.log(data)
        })
      }

      function updateForm(e){
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
      }


      ///toggle between flag and image
  return (
    <Stack direction="horizontal" gap={3} id='visited-card'>
    <div>
        <img src={flag}  alt={country}/>
        <h3>{country}</h3>
    </div>
    <div>
        <ul>
            <li>{date}</li>
            <li>{cities}</li>
            <li>{memories}</li>
            <img src={image} alt="user added from trip"/>
        </ul>
    </div>
    <form className='visited-form' onSubmit={e => handleSubmit(e)}>
            <label>Date of Trip:</label>
            <input 
            name="date"
            value={form.date}
            onChange={(e) => updateForm(e)}></input>

            <label>Cities and Sites Visited:</label>
            <input 
            name="cities"
            onChange={(e) => updateForm(e)}></input>

            <label>Write more about your trip:</label>
            <input
            value={form.memories}
            name="memories" 
            onChange={(e) => updateForm(e)}></input>

            <label>Add a picture:</label>
            <input
            value={form.image}
            name="image"
            onChange={(e) => updateForm(e)}></input>
            <button type="submit">Save</button>
    </form>
    </Stack>
  )
}

export default VisitedCard