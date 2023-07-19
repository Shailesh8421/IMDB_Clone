import React, { useEffect, useState } from "react";
import Skeleton,{SkeletonTheme} from "react-loading-skeleton";
import { Link } from "react-router-dom";
import './Card.css'

const Card=({movie})=>{
    const [isLoading,setIsLoading]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        },1500)
    },[])

    return(
        <>
        {
            isLoading
            ?
            (<div className="cards">
                <SkeletonTheme color='#202020' highlightColor="#444">
                    <Skeleton height={300} duration={2}/>
                </SkeletonTheme>
            </div>)
            :
            (<Link to={`/movie/${movie.id}`} style={{textDecoration:"none",color:"white"}}>
                <div className="cards">
                    <img className="cards_img" src={`https://image.tmdb.org/t/p/original/${movie?movie.poster_path:""}`} alt="path"/>
                    <div className="cards_overlay">
                        <div className="cards_title">
                            {movie?movie.original_title:""}
                        </div>
                        <div className="cards_runtime">
                            {movie?movie.release_date:""}
                            <span className="cards_rating">
                                {movie?movie.vote_average:""}⭐
                            </span>
                        </div>
                        <div className="cards_desc">{movie?movie.overview.slice(0,118)+"...":""}</div>
                    </div>
                </div>
            </Link>)
        }
        </>
    )
}

export default Card; 