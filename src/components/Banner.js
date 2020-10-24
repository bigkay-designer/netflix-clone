import React, {useState, useEffect} from 'react'
import axios from './axios'
import requests from './request'
import './css/Banner.css'

function Banner({fetchUrl, onLoad}) {
    const base_url = "https://image.tmdb.org/t/p/original/"

    const [bannerMovies, setBannerMovies] = useState([])

    useEffect(()=>{
        const fetchData = async()=>{
            let request = await axios.get(fetchUrl)
            let randomData = request.data.results[Math.floor(Math.random() * request.data.results.length -1)]
            setBannerMovies(randomData)
            // console.log(request.data.results[Math.floor(Math.random() * request.data.results.length -1)])
            return request
        }
        fetchData()
    }, [fetchUrl])

    let bannerStyle = {
        background : `url(${base_url}${bannerMovies?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    }

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n-1) + "..." : str
    }

    return (
        <header className="banner" 
            style={bannerStyle}
        >
            <div className="banner__content">
                <h1 className="banner__content__title" >{bannerMovies?.name || bannerMovies?.title || bannerMovies?.original_name}</h1>
                <div className="banner__content__btn">
                    <button>play</button>
                    <button>my list</button>
                </div>
                <p className="banner__content__overview">{truncate(bannerMovies?.overview, 150)}</p>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
