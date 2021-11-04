import styled from "styled-components";
import {motion} from "framer-motion"

//Styled Components
export const Layout = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
`;
// styledとimportでnamedしたから、styled
// divに対して適用させたいので.div
export const Description = styled.div`
    flex: 1;
    overflow: hidden;
    padding-right: 5rem;
    z-index: 2;
    h2{
        font-weight: lighter;
    }
`;
export const Image = styled.div`
    flex: 1;
    z-index: 2;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
        //when we make 80vh then サイズが縦のびしちゃう, we can put　object-fit
    }
`;
export const Hide = styled.div`
    overflow: hidden;
`;

// import {About, Hide}
//export const にしているのでimportdefaultではなくimport{}