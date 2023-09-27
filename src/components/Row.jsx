import React, { useEffect, useState } from 'react'
import tmdbAxiosInstance from '../tmdbAxiosInstance'
import './Row.css'

function Rows({title,fetchUrl,isPoster}) {
  const [allMovies,setAllMovies]=useState([])
  const base_url = "https://image.tmdb.org/t/p/original/";
    // console.log(fetchUrl)
    const fetchData =async ()=>{
      const {data} = await tmdbAxiosInstance.get(fetchUrl)
      setAllMovies(data.results)
    }
    // console.log(allMovies);

    useEffect(()=>{
      fetchData()
    },[])

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="all_movies">
        {
          allMovies.map(item=>(
            <img className={`${isPoster&&'movie_large'} movie`} src={`${base_url}/${isPoster?item.poster_path:item.backdrop_path}`} alt="no image" />
          ))
        }
      </div>
    </div>
  )
}

export default Rows