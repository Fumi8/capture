import React from "react";
import styled from "styled-components";
import {Layout} from '../styles';
import Toggle from "./Toggle";

//Animation
import {AnimateSharedLayout} from "framer-motion";
//detect our layout change even the animate start
import {scrollReveal} from "../animation";
import {useScroll} from "./useScroll";


const FaqSection = () => {
    const [ element, controls] = useScroll();
    return(
        <Faq variants={scrollReveal} animate={controls} initial="hidden" ref={element}>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                <Toggle title="How Do I Start?">
                    <div className="question">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo.</p>
                        </div>
                    </div>
                </Toggle>
                <Toggle title="Daily Schedule">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo.</p>
                        </div>
                </Toggle>
                <Toggle title="Diferrent Payment Methods">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo.</p>
                        </div>
                </Toggle>
                <Toggle title="What Products do you offer">
                        <div className="answer">
                            <p>Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, illo.</p>
                        </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(Layout)`
 display: block;
 span {
     display: block;
 }
 h2{
     padding-bottom: 2rem;
     font-weight: lighter;
 }
 .faq-line{
     background: #cccccc;
     height: 0.2rem;
     margin: 2rem 0rem;
     width: 100%;
 }
 .question{
     padding: 2rem 0rem;
     cursor: pointer;
 }
 .answer{
     padding:2rem 0rem;
     p{
         padding: 1rem 0rem;
     }
 }
`;


export default FaqSection;
