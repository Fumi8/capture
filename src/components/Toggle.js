import React, {useState} from 'react';

//Animations
import {motion} from 'framer-motion';

const Toggle = ({children, title}) => {
    const [toggle, setToggle] = useState(false);
    return(
        <motion.div layout clsssName="question" onClick={() => setToggle(!toggle)}>
            <motion.h4 layout>{title}</motion.h4>
            {toggle ? children : ""}
            <div className="faq-line"></div>

        </motion.div>
    );
};
//{toggle ? children : ""} if toggle is true render out chirderen, if not children then don't render out anything els

export default Toggle;