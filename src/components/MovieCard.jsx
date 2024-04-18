import React from "react";
import WatchList from "./WatchList";

function MovieCard({ watchList,handleRemoveFromWatchList,movieObj,poster_path ,name,handleAddtoWatchList}) {
    const imageUrl = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` :'https://via.placeholder.com/300x450' ; // Placeholder image URL if poster_path is not available

    function doesContain(movieObj){
        for(let i=0;i<watchList.length;i++){
            if(watchList[i].id == movieObj.id) {
                return true;
            }

        }
        return false;
    }
    return (
        
            <div className=' m-8 font-bold h-[400px] w-[300px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer'
                style={{backgroundImage: `url(${imageUrl})`}}>card
                {/* Additional movie details */}
                
                {doesContain(movieObj)?
                <div onClick={()=>(handleRemoveFromWatchList(movieObj))} className="mx-[17rem] h-8 w-8 bg-gray-500/20 rounded-lg" >
                &#10060;
                </div>:
                <div onClick={()=>(handleAddtoWatchList(movieObj))} className="mx-[17rem] h-8 w-8 bg-gray-500/20 rounded-lg" >
                    &#128525;
                </div>}
                
                

                <div className="my-[20rem] text-white text-xl w-full p-2 text-center bg-gray-900/60">{name}</div>
            </div>
            
       
    );
}20

export default MovieCard;
