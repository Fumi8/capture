import React from "react";
import home2 from "../img/home2.png";
//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
//Styles
import { Layout, Description, Image} from "../styles";
import styled from "styled-components";
import { fade } from "../animation";
import {useScroll} from "./useScroll";


//variantsのfadeを使用するときはmotion.divであるか,framer-motionが適用しているかも確認
const ServiceSection = () => {
    const [ element, controls] = useScroll();
    return(
        <Services variants={ fade } animate={controls} initial="hidden" ref={element}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={clock}/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={teamwork}/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={diaphragm}/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img alt="icon" src={money}/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
                 </Description>
                 <Image>
                    <img alt="camera" src={home2}/>
                 </Image>

        </Services>
    );
};
//styleを微調整したい場合、別名を定義する 決めたい名前　= styled(決まっていた名前)`~~~~~`;
const Services = styled(Layout)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;

`;

const Card = styled.div`
    flex-basis: 20rem;
    .icon{
        display: flex;
        align-items:center;
        h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
    }
    
`;

export default ServiceSection;
