import React, { useEffect, useState } from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home=()=>{
    const [popularMovies,setPopularMovies]=useState([]);
    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=d4f98a2f87781978047d26633bc0a3d0")
        .then(res=>res.json())
        .then(data=>setPopularMovies(data.results))
        // .then(data=>console.log(data.results)) 
    })
    return(
        <>
        <div className="poster">
            <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={3}
                infiniteLoop={true}
                showStatus={false}
            >
               { popularMovies.map(movie =>(
                    <Link style={{textDecoration:"none",color:"white"}}to ={`/movie/${movie.id}`} >
                    <div className="posterImage">
                        <img src={`https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`} alt="Movie_poster" />
                    </div>
                    <div className="posterImage_overlay">
                        <div className="posterImage_title">
                            {movie ? movie.original_title:""}
                        </div>
                        <div className="posterImage_release">
                            {movie ? movie.release_date:""}
                            <span className="posterImage_rating">
                            {movie ? movie.vote_average:""}⭐ 
                            </span>
                        </div>
                        <div className="posterImage_desc">
                            {movie ? movie.overview:""}
                        </div>
                    </div>
                    </Link>
                ))
               }
            </Carousel>
            <MovieList/>
            </div>
        </>
    )
}
export default Home;