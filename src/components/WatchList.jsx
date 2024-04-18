import React, { useState } from "react";
import genreids from "../UTILS/genere";

function WatchList({watchList,setWatchList,handleRemoveFromWatchList}){

    const [search,setSearch] = useState('')

     let handleSearch = (e) =>{
        setSearch(e.target.value)
     }

     let sortIncreasing = () =>{
       let sortedIncreasing= watchList.sort((movieA,moiveB)=>{
            return movieA.vote_average - moiveB.vote_average
        })
        setWatchList([...sortedIncreasing])
     }

     let sortDecreasing = () =>{
        let sortedDecreasing =watchList.sort((movieA,moiveB)=>{
            return moiveB.vote_average - movieA.vote_average
        })

        setWatchList([...sortedDecreasing])
     }
    return(
        <>

        <div className="flex justify-center flex-wrap m-4">
            <div className=" flex justify-center h-[2rem] w-[9rem] items-center bg-blue-400 rounded-xl text-white font-bold mx-4">Action</div>
            <div className=" flex justify-center h-[2rem] w-[9rem] items-center bg-orange-400 rounded-xl text-white font-bold mx-4">Action</div>
        </div>


        <div className="flex justify-center my-4">
            <input onChange={handleSearch} value ={search} type="text" placeholder="Search for Moive" className="h-[3rem] w-[18rem] bg-gray-200 outline-none " />
        </div>
        <div className=" overflow-hidden rounded-lg border border-gray-200 m-0">
            <table className="w-full text-gray-500 text-center">
                <thead className="border-b-2">
                    <tr>
                        <th>Name</th>
                         <th className="flex justify-center">
                            <div onClick={sortIncreasing} className="p-2"><i className="fa-solid fa-arrow-up"></i></div>
                            <div className="p-2">Ratings</div>
                            <div onClick={sortDecreasing} className="p-2"><i className="fa-solid fa-arrow-down"></i></div>
                         </th>
                        <th>Popularity</th>
                        <th>Genera</th>
                    </tr>
                </thead>
                <tbody>

                    {watchList.filter((movieObj)=>{
                        return movieObj.title.toLowerCase().includes(search.toLowerCase())
                    }).map((movieObj) =>{
                        return <tr className="border-2">
                        <td className="flex item-center px-6 py-4">
                            <img className="h-[6rem] w-[10rem]" src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                            <div className="mx-10">{movieObj.title}</div>
                        </td>
                        
                        <td>{movieObj.vote_average}</td>
                        <td>{movieObj.popularity}</td>
                        <td>{genreids.genres.find(genre => genre.id === movieObj.genre_ids[0])?.name}</td>

                        <td onClick={()=>handleRemoveFromWatchList(movieObj)} className="text-red-800">Delete</td>
                    </tr>
                    })
                    }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default WatchList