import {
  Routes,
  Route,
} from 'react-router-dom'

import React, { useState } from 'react'
import Home from '../pages/Home'
import PackingList from '../pages/PackingList'
// import BucketList from '../pages/BucketList'
import Header from '../components/Header'
import Visited from '../pages/Visited'
import NavBar from './NavBar'


function App() {

  const [visited, setVisited] = useState([])
  // const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState('')
  
  function updateVisited(){
    setVisited(visited)
  }
  // function updateFavorites(){
  //   setFavorites()
  // }

  ///search functionality
  const handleSearch = (newStr) => {
    setSearch(newStr)
  }

  return (
    <div id="App">
      <Header />
      <NavBar handleSearch={handleSearch} search={search}/>
      <Routes>
          <Route exact path="/" element={<Home updateVisited={updateVisited} search={search} handleSearch={handleSearch}/>}>HOME</Route>
          {/* <Route path="/bucket-list" element={<BucketList />}>Bucket List</Route> */}
          <Route path="/visited" element={<Visited />}>Visited</Route>
          <Route path="/packing-list" element={<PackingList />}>Packing List</Route>
      </Routes>
      
      
    
    </div>
  );
}

export default App;
