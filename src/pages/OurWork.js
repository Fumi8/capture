import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
//we need to make links for each contents, athlete theracer goodtime 

//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

//Animations
import {motion} from 'framer-motion';
import {slider, sliderContainer, pageAnimation, fade, photoAnim, lineAnim, swoopAdoop} from '../animation';
import {useScroll} from '../components/useScroll';
import ScrollTop from '../components/ScrollTop';


const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return(
        <Work exit="exit" variants={pageAnimation} initial="hidden" animate="show" style={{background: "#fff"}}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}></Frame1>
                <Frame2 variants={slider}></Frame2>
                <Frame3 variants={slider}></Frame3>
                <Frame4 variants={slider}></Frame4>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnim} src={athlete} alt="athlete" />
                    </Hide>
                </Link>
            </Movie>
            <Hide>
                <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
                    <h2>The Racer</h2>
                    <motion.div variants={lineAnim} className="line"></motion.div>
                    <Link to="/work/the-racer">
                        <img variants={photoAnim} src={theracer} alt="racer" />
                    </Link>
                </Movie>
            </Hide>
            <Movie ref={element} variants={fade} animate={controls} initial="hidden">
                <h2>Good Times</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="goodtimes" />
                </Link>
            </Movie>
           <ScrollTop />
        </Work>
    );
};
//for styled component, we need to put (motion.div)
const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
      padding: 1rem 0rem; 
    }
`;
//overflowhidden: for animation
const Movie = styled(motion.div)`
    padding-bottom: 10rem;
    .line{
        height: 0.2rem;
        background: #23d997;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
    //if just height width it will be little bit squash(押し潰される),so put object-fit: cover;
`;

const Hide = styled.div`
    overflow: hidden;
`
//Frame Animation
    const Frame1 = styled(motion.div)`
        position: fixed;
        left: 0;
        top: 10%;
        width: 100%;
        height: 100vh;
        background: #fffebf;
        z-index: 2;
    `;
    //top 10% for navigation space

    const Frame2 = styled(Frame1)`
        background: #ff8efb;
     `;

    const Frame3 = styled(Frame1)`
        background: #8ed2ff;
    `;

    const Frame4 = styled(Frame1)`
        background: #8effa0;
    `;

    //change only bg color of Frame1





export default OurWork;
