import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './request'
import './css/Row.css'
const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        const fetchData = async ()=>{
            const request = await axios.get(fetchUrl)
            // console.log(request)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])
    return (
            <div className="row">
                {/* title */}
                    <h3>{title}</h3>
                {/* container => posters */}
               <div className="row__posters">
                    {movies.map(movie =>(
                        <img className={`row__post__img ${isLargeRow && "row__post__img--large"}`} 
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie.name} />
                    ))}

                </div> 

            </div>
    )
}

export default Row
