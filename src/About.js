import  { useState, useRef,React} from 'react';
import './About.css';
import abouti1 from './images/client.jpg';
import Video from './images/cookingV.mp4';
import image from './images/bot.jpg'
//import Bot from '../Admin/src/App.js'


function about() {
  

  return (
    <div className='about__home__initial'>
      <div className='about__home__header'>
        <h2>Working too hard? Take a Break and eat some of our delicious and Healthy Food items</h2>
      </div>  
      <div className='about__home'>  
          <div className='about__image'>
            <h2>A Small Video of our Chef Cooking</h2>
              <video controls autostart autoPlay src={Video} type="video/mp4" height="90%" width="125%"/>
          </div>
          <div className='inner_image'>
              <div className='about__info'>
                <h4>Working? No time to go to the canteen wait on line and order? We've got it Covered. Order and continue working while we prepare your delicious meal. SAVE TIME!! SAVE MONEY!!Working? No time to go to the canteen wait on line and order? We've got it Covered. Order and continue working while we prepare your delicious meal. SAVE TIME!! SAVE MONEY!!</h4>
              </div>
              {/* <div className="about__video">
                  <video controls autostart autoPlay src={Video} type="video/mp4" />
              </div> */}
          </div>
      </div>
      <div className='about__home'>
              <div className='chef__image'>
                <h2>Our Chef "Gordon Ramsey"</h2>
                  <img src={abouti1} alt='' height='250px' width='300px'/>
              </div>
          <div className='chef__info'>
            <h5>Why am I getting spam text messages? There are many ways spammers get hold of your cell phone number so they can send SMS spam and sales texts: They may use technology to generate numbers automatically — so even if you have a brand-new number, you can still receive both robocalls and robotexts.
              Spam messages usually originate from a spammer's getting hold of your cell number, often via data leaks, the sale of personal data or even simply by random number generation. However the spammers got your number spam texts are at best an annoyance, and at worst a downright security hazard.
            </h5>
          </div>
      </div>
      <div className='about__queries'>
        <div className='login__container'>
              <h1>Have a Query? Talk to Us</h1>
              <form>
                  <h5>Name</h5>
                  <input type='text'placeholder='NAME'/>
                  <h5>E-mail</h5>
                  <input type='text'placeholder='EMAIL'/>
                  <h5>Your Query</h5>
                  <input type='textarea'placeholder='Query'/>
                  <button type='submit' rows={5} cols={5} className='login__signInButton'>Send</button>
              </form>
        </div> 
        <div className='query__right'>


        </div>
      </div>
    </div>
  )
}

export default about;