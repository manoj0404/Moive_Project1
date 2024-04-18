import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({handleAddtoWatchList,handleRemoveFromWatchList,watchList}) {
    const [movies, setMovies] = useState([]);
    const [pageNo, setpageNo] = useState(1)
   
  
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=f9876f7f5ea59bde0e7ea7f419d6a168&language=en-US&page=${pageNo}`)
            .then(function(res) {
                setMovies(res.data.results);
                // console.log(res.data.results);
            });
    }, [pageNo]);
    const handlePrev =() =>{
        if(pageNo === 1){
          setpageNo(pageNo)
        }
        else{
            setpageNo(pageNo-1)
        }
        
     }
  
     const handleNext = () =>{
       setpageNo(pageNo+1)
     }
  
    return (
        <div className="p-5">
            <div className=" text-2xl m-5 font-bold text-center">Trending Movies</div>
            <div className="flex flex-wrap justify-around">
                {movies.map(movieObj => (
                    <MovieCard movieObj={movieObj} key={movieObj.id} poster_path={movieObj.poster_path} name = {movieObj.original_title} handleAddtoWatchList={handleAddtoWatchList} handleRemoveFromWatchList={handleRemoveFromWatchList} watchList={watchList}/>
                ))}
            </div> 
            <div>
            <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev}/>
            </div>
        </div>
        
       
    );
}

export default Movies;
