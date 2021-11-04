import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {MovieState} from "../movieState";

//use histroy gives us currentry the path that we are 
//check, compair the url state, then mach it, set the specific data drom movieState
//when we use API, we can make this, such as the based on the url

//Animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation';
import ScrollTop from "../components/ScrollTop";

const MovieDetail = () => {
    const history = useHistory();
    const url = history.location.pathname;
    //urlをgetする為にuseHistory内からのinfoをurlとして定義
    const [movies, setMovies] = useState(MovieState);
    //MovieStateを使う為にuseStateを用いてconstする
    const [movie, setMovie] = useState(null);
    //update the specific movie from the movieState, so the defalut is null

        //Which movie we are on? 
        //UseEffect
        useEffect(() =>{
            const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
            setMovie(currentMovie[0]);
            //we need to go to the inside of array
        },[movies,url]);
        console.log(movie);
        //compering the url from the movieState to the page right here(when we are)
        //everytime movie or url　changes,  we wanna execute this , update this 

    return(
        <> 
            {movie && (
                <Details 
                    exit="exit" 
                    variants={pageAnimation} 
                    initial="hidden" 
                    animate="show"
                >
                    <HeadLine>
                        <h2>{movie.title}</h2>
                        <img src={movie.mainImg} alt="movie" />
                    </HeadLine>
                    <Awards>
                        {movie.awards.map((award) => (
                            <Award 
                                title={award.title}
                                description={award.description}
                                key={award.title}
                            />
                        ))}
                    </Awards>
                    <ImageDisplay>
                        <img src={movie.secondaryImg} alt="movie" />
                    </ImageDisplay>
                </Details>
               
            )}
             <ScrollTop />
        </>
        //if movie is available, then it's gonna show up the details, we just need <> frection for no error
    );   
};

const Details = styled(motion.div)`
    color: white;
`;
const HeadLine = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`;
const Awards = styled.div`
    min-height: 80vh;
    display: flex;
    margin: 5rem 10rem;
    align-items: center;
    justify-content: space-around;
`;

const AwardsStyle = styled.div`
    padding: 5rem;
    h3{
        font-size: 1.8rem;
    }
    .line{
        width: 100%;
        background: #23d997;
        height: 0.5rem;
        margin: 1rem 0rem;
    }
    p{
        padding: 2rem 0rem;
    }
`;
const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
`;


//Award Compornent
const Award = ({title, description}) => {
    // we make the access of title and description
    return(
        <AwardsStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </AwardsStyle>
    )
};

export default MovieDetail;
