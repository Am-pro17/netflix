import React, { useEffect, useState } from 'react'
import "./Single.css"

function Single_Gener({id,gener}) {
  let [movie,setMovie] = useState([])
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=007bfc25f21eb93cf93cfcf7fe8fb623&language=en-US&with_genres=${id}&page=2`)
   .then((raw)=>(raw.json()))
   .then((data)=>(setMovie(data.results)))
   
  },[])
  
  return (
    <div className='gener_wrapper_outside'>
    <h2>{gener}</h2>
    <div className='gener_wrapper_inside '>
   {
    movie.map((single,index)=>{
      let {poster_path,original_title,overview} = single
      return (
        <div key={index} className='single_movie'>
          {/* <h1>{original_title}</h1> */}
          <img src={`https://image.tmdb.org/t/p/w154${poster_path}`} alt="" />

        </div>
      )
    })
   }
    </div>
    </div>
  )
}

export default Single_Gener