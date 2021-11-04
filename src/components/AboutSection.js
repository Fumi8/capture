import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";
import {Layout, Description, Image, Hide} from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim_2, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
//     const titleAnim = {
//         hidden: {opacity:0 },
//         show: {opacity: 1, transition: { duration:2 } },
//     };
//     const container = {
//         hidden: { x: 100},
//         show: {x: 0, 
//             transition: {
//                 duration:0.75,
//                 ease: "easeOut",
//                 staggerChildren:1,
//                 when: "afterChildren",
//             },
//         },
//     };
    //if the parent set the initial and animate, then children follow. so don't need to set those
    //staggerChildren , when , we can use ! after the children or before the children borth could be ok
    //if when is notthing, then start together


    //variants={container} initial="hidden" animate="show" className="title"
    return(
        <Layout>
           <Description>
               <motion.div>
                   <Hide>
                       <motion.h2 variants={titleAnim_2}>
                           We work to make
                        </motion.h2>
                   </Hide>
                   <Hide>
                       <motion.h2 variants={titleAnim_2}>
                           your <span>dreams</span> come
                        </motion.h2>
                   </Hide>
                   <Hide>
                       <motion.h2 variants={titleAnim_2}>true.</motion.h2>
                   </Hide>
               </motion.div>
               <motion.p variants={fade}>
                   Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
               </motion.p>
               <motion.button variants={fade} >Contact Us</motion.button>
            </Description> 
            <Image>
                <motion.img variants={photoAnim}  src={home1} alt="guy with a camera" />
                
            </Image>
            <Wave />
        </Layout>
        //importしている場合はsrc={home1}で良い
        //motion: animate=,initial= where do we start and where do we end up. 
        //as soon as the component start to renderring out, the animation start
        //if you want to stagger everything, you can just put initial='hidden' animate 'show' 
        
    );
};



export default AboutSection;