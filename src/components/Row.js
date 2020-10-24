import React, {useState, useEffect} from 'react'
import axios from './axios'
import './css/Row.css'
import Youtube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import FlashMessage from 'react-flash-message'
const base_url = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState('')

    useEffect(()=>{
        const fetchData = async ()=>{
            const request = await axios.get(fetchUrl)
            // console.log(request)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: '390',
        width: '100%',
        playVars: {
            // https://developers.google.com/youtube/player_parameters

            autoplay: 1,
        }
    }

    const handleClick = (movie)=>{
        if(trailerUrl){
            setTrailerUrl("")
        }else{
            movieTrailer(movie?.name || "")
            .then(url =>{
                const urlParams = new URLSearchParams( new URL (url).search);
                setTrailerUrl (urlParams.get('v'))
            })
            .catch((error) => {
                console.log('error:**** ' + error)
            })
        }
    }
    return (
            <div className="row">
                {/* title */}
                    <h3>{title}</h3>
                {/* container => posters */}
               <div className="row__posters">
                    {movies.map(movie =>(
                        <img className={`row__post__img ${isLargeRow && "row__post__img--large"}`} 
                        onClick={()=> handleClick(movie)}
                        key={movie.id}
                        src={`${base_url}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} 
                        alt={movie.name} />
                    ))}

                </div> 

                {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
            </div>
    )
}

export default Row
