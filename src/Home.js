import React from 'react';
//import "react-responsive-carousel/lib/styles/carousel.min.css"; 
//import { Carousel } from 'react-responsive-carousel';
//import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Home.css';
import Burgerimage from "../src/images/burger_slide.png";
import Product from './Product.js';
import Item1 from "./images/rs1.png";
import Item2 from "./images/rs2.png";
import Item3 from "./images/rs3.png";
import Item4 from "./images/rs4.png";
import Item5 from "./images/rs5.png";
import Item6 from "./images/image6.jpg";
import Item7 from "./images/image7.jpg";
import Item8 from "./images/image8.jpg";
import Item9 from "./images/image9.jpg";
import Item10 from "./images/image10.jpg";
import Item11 from "./images/image11.jpg";
import Item12 from "./images/image12.jpg";
//import Item13 from "./images/image13.jpg";
import Item14 from "./images/image14.png";
import Item15 from "./images/image15.jpg";
import Item16 from "./images/image16.jpg";
//import ImageSlider from "./ImageSlider";
//import Slide1 from "./images/blog_img1.png";
//import Slide2 from "./images/backneed.jpg";
import images from './images'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
//import Slider from './Silder.js'
import {useRef,useEffect,useState} from 'react';



function Home() {
    const [width,setWidth] = useState(0);
    const carousel = useRef();
    const [startAnimation, setStartAnimation] = useState(false);
    // let [distance, setDistance] = useState('0');
    // function move(){
    //   setDistance('100%');
    // }
  
  //const slides = [
    //{src:{Slide1},title:"slide1"},
    //{url:'C:\Users\win10\mresult\src\images\backneed.jpg',title:"slide2"}
  //];
  //const containerStyles = {
   // width:'500px',
    //height:'280px',
   // margin:'0 auto',
 // }
  return (
    <div className='home'>
        <div className="home_body">
                <div className="body1 grid">
                        <motion.div transition='x' className="body1_img">
                            <img src={Burgerimage} srcset="" width="100%" height="100%"/>
                        </motion.div>
                        <div className="body1_data">
                            <h2>Discover Dishes That will Satisfy both your hunger and Satisfaction</h2>
                            <h4>Working? No time to go to the canteen wait on line and order? We've got it Covered. Order and continue working while we prepare your delicious meal. SAVE TIME!! SAVE MONEY!!</h4>
                            {/* <div className="progress-box">
                                <div className="mover" style={{width: distance}}></div>
                            </div>         */}
                            <div className='button__about'>
                                {/* {startAnimation && <Slider>
                                    </Slider>
                                } */}
                                <Link to="/aboutus"><button  className='home__button' ><h4>About Us</h4></button></Link>
                            </div>
                        </div>
                </div>
        </div>
        <div className='slider'>
            <h2>FEATURED DISHES</h2>
            <motion.div ref={carousel} className='carousel'>
                <motion.div drag='x' dragConstraints={{right:0,left:-700}} className='inner__carousel'>
                    {images.map(image => {
                         return(
                            <motion.div className='item'>
                                <img src={image} alt=""/>
                            </motion.div>
                        );
                    })}

                </motion.div>
            </motion.div>
        </div>
        <div className='home2'>
            <div className='home__container'>
            <link rel="stylesheet" href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"/>
                <h2> CHINESE </h2>
                <div className='home__row'>
                    <Product id="1555" title='Sushi' price={80.00} image={Item4} rating={4}/>
                    <Product id="1888" title='Chicken Momo' price={60.00} image={Item7} rating={5}/>
                    <Product id="2000" title='Chicken Roll' price={70.00} image={Item11} rating={4}/>
                    <Product id="2222" title='Roti Curry' price={40.00} image={Item14} rating={3}/>
                </div>
                <h2> SOUTH INDIAN BREAKFAST </h2>
                <div className='home__row'>
                    <Product id="1222" title='Sandwich' price={50.00} image={Item1} rating={5}/>
                    <Product id="2333" title='Dosa' price={30.00} image={Item8} rating={4}/>
                    <Product id="2444" title='Idly' price={40.00} image={Item9} rating={5}/>
                    
                </div>
                <h2> INDIAN LUNCH </h2>
                <div className='home__row'>
                    <Product id="1333" title='Noodles' price={70.00} image={Item2} rating={4}/>
                    <Product id="1444" title='Biryani' price={80.00} image={Item3} rating={5}/>
                    <Product id="1777" title='Fried Rice' price={60.00} image={Item6} rating={4}/>
                    <Product id="2111" title='Grill Chichen' price={140.00} image={Item12} rating={5}/>
                    
                </div>
                <h2> DESERT </h2>
                <div className='home__row'>
                    <Product id="1666" title='Ice cream' price={40.00} image={Item5} rating={4}/>
                    <Product id="1999" title='Donuts' price={70.00} image={Item10} rating={5}/>
                    <Product id="2555" title='MilkShake' price={60.00} image={Item15} rating={5}/>
                    <Product id="2666" title='Cupcake' price={40.00} image={Item16} rating={5}/>
                </div>
            </div>  
        </div>
    </div>
    
  );
}

export default Home;