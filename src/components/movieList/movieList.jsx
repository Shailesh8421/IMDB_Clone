import React, { useEffect, useState } from "react";
import Card from "../card/Card";
import { Link, useParams } from "react-router-dom";
import './movieList.css'

const MovieList=()=>{
    const [movieList,setMovieList]=useState([]);
    const {type}=useParams();
    const getData=()=>{
        fetch(`https://api.themoviedb.org/3/movie/${type ? type :"popular"}?api_key=d4f98a2f87781978047d26633bc0a3d0`)
        .then(res=>res.json())
        .then(data=>setMovieList(data.results))
    }
    
    useEffect(()=>{
        getData()
    },[])

    useEffect(()=>{
        getData()
    },[type])

    
    return(
        <>
            <div className="movie_list">
                <h2 className="list_title">{(type?type:"POPULAR").toUpperCase()}</h2>
                <div className="list_cards">
                    {
                        movieList.map(movie=>(
                            <Card movie={movie}/>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default MovieList 