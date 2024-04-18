import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import WatchList from './components/WatchList';
import Movies from './components/Movies';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Banner from './components/Banner';


function App() {
  //const [count, setCount] = useState(0)
 let [watchList,setWatchList] = useState([])

 let handleAddtoWatchList = (moiveObj) =>{         // add new moive keeping previous
      let newWatchList = [...watchList,moiveObj]
      localStorage.setItem('moivesApp',JSON.stringify(newWatchList))
      setWatchList(newWatchList)
      console.log(newWatchList);
 }
 let handleRemoveFromWatchList = (moiveObj) =>{
    let filteredWatchList = watchList.filter((moive)=>{
      return moive.id != moiveObj.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem('moiveApp',JSON.stringify(filteredWatchList))
    console.log(filteredWatchList);
 }

 useEffect(()=>{
  let moviesFromLocalStorage = localStorage.getItem('moivesApp')
  if(!moviesFromLocalStorage){
    return
  }
  setWatchList(JSON.parse(moviesFromLocalStorage))
 },[])
  return (
    <>
      <BrowserRouter>
          <Navbar /> 
          <Routes>
                <Route path='/' element={<><Banner /> <Movies watchList={watchList} handleAddtoWatchList ={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} /> </>}  />
                <Route path='/watchList' element={<WatchList  watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList}/>}  />            
          </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
