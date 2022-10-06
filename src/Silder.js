import React, {useState} from 'react';
import {useSpring,animated as a} from 'react-spring';
import './Slider.css';

const Slider = ({children}) => {
    const animatedProps = useSpring({
        opacity:1,
        marginTop:5,
        from:{marginTop:-200,opacity:0},
        config:{mass:1,tension:150,friction:10},
    });
    return (
        <a.div className="spring__in" style={(...animatedProps) =>{
            
        } }>
            {children}
        </a.div>
    );
};

export default Slider;