
import React from "react";
import classes from '../components/landingPage.module.css'
import Section2 from "./section2";
import ProductSection from "./productSection";
import ServiceSection from "./serviceSection";
import Section1 from "./section1";
import Section3 from "./section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Footer from "./footer";


// LandingPage component containing the content
const LandingPage = () =>{
  return (
    <div className={classes['app-container']}>
      <div className={classes.header}>
          <div className={classes.header2}>
            <p className={classes.p1}><img src="/40.png" alt="" width='12px' /> (222) 555-0118</p>
            <p><img src="/41.png" alt="" width='12px' /> michelle.revera@example.com</p>
          </div>
          <div>
            <p>Flollow Us and get a chance to win 80% off</p>
          </div>
          <div className={classes.follow}>
            <p>Follow Us : 
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="#fff"><path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"/><path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01"/></g></svg>
              
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"><path fill="#fff" d="M23.498 6.186a3.02 3.02 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.02 3.02 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.02 3.02 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.02 3.02 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814M9.545 15.568V8.432L15.818 12z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 256 256"><path fill="#f7f7f7" d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"/><path fill="#fff" d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"/></svg>
            
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512"><path fill="#fff" d="M496 109.5a201.8 201.8 0 0 1-56.55 15.3a97.5 97.5 0 0 0 43.33-53.6a197.7 197.7 0 0 1-62.56 23.5A99.14 99.14 0 0 0 348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.2 93.2 0 0 0 2.54 22.1a280.7 280.7 0 0 1-203-101.3A95.7 95.7 0 0 0 36 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0 1 35.22 199v1.2c0 47 34 86.1 79 95a100.8 100.8 0 0 1-25.94 3.4a94.4 94.4 0 0 1-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.6 199.6 0 0 1 39.5 405.6a203 203 0 0 1-23.5-1.4A278.7 278.7 0 0 0 166.74 448c181.36 0 280.44-147.7 280.44-275.8c0-4.2-.11-8.4-.31-12.5A198.5 198.5 0 0 0 496 109.5"/></svg>
            </p>
          </div>
      </div>
      <header className={classes['main-header']}>
        <div className={classes['header-content-wrapper']}>
          <a href="#" className={classes['site-logo']}>Bandage</a>
          
          <ul className={classes['nav-list']}>
              <li><a href="#" className={classes['nav-link']}>Home</a></li>
              <li><a href="#" className={classes['nav-link']}>Product</a></li>
              <li><a href="#" className={classes['nav-link']}>Pricing</a></li>
              <li><a href="#" className={classes['nav-link']}>Contact</a></li>
            </ul>
          <div className={classes['header-actions']}>
            <a href="#" className={classes['nav-links']}>Login/Register</a>
            <a href="#" className={classes['nav-link']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="#65a0d3" d="M9.539 15.23q-2.398 0-4.065-1.666Q3.808 11.899 3.808 9.5t1.666-4.065T9.539 3.77t4.064 1.666T15.269 9.5q0 1.042-.369 2.017t-.97 1.668l5.909 5.907q.14.14.15.345q.009.203-.15.363q-.16.16-.354.16t-.354-.16l-5.908-5.908q-.75.639-1.725.989t-1.96.35m0-1q1.99 0 3.361-1.37q1.37-1.37 1.37-3.361T12.9 6.14T9.54 4.77q-1.991 0-3.361 1.37T4.808 9.5t1.37 3.36t3.36 1.37"/></svg>
            </a>
            <a href="#" className={classes['nav-link']}>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill="#65a0d3" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2"/></svg>
            </a>
            <a href="#" className={classes['nav-link']}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48"><path fill="none" stroke="#65a0d3" stroke-linecap="round" stroke-linejoin="round" d="M24.136 9.1c3.31-3.409 5.46-3.6 7.525-3.6c5.815 0 10.478 6.055 10.394 11.612c-.131 8.693-5.281 16.117-17.932 25.388C12.748 34.747 6.137 24.862 5.947 17.599C5.808 12.318 10.823 5.5 16.665 5.5c2.256 0 4.125.148 7.471 3.6" stroke-width="1.1"/></svg>
            </a>
          </div>
        </div>
      </header>

      {/* Banner Section */}
    <div>
      <Section1/>
    </div>
      
      

      {/* Featured Products Section */}
      <div>
        <ProductSection/>
      </div>
     

      {/* Best Services Section */}
      <div>
        <ServiceSection/>
      </div>
      

      {/* Section2 */}
      <div>
        <Section2/>
      </div>
      

      {/* Section3 */}
      <div>
        <Section3/>
      </div>
      
      {/* Section4 */}
      <Section4/>

      {/* Section5 */}
      <Section5/>

      {/* Footer */}
      <Footer/>

    </div>
  );
}

export default LandingPage;
