import React from 'react';
import styles from './Home.module.css';
import RubberBand from 'react-reveal/RubberBand';
import HomePic from '../../img/i01_homepic.png'


const Home = () => {
  return (
    <div className={styles.home}>

    <div className={styles.homeright}>
    <img src={HomePic} alt="" />
    <p>Shubham Vishwakarma</p>
    <p>Front-end Developer, UI/UX Enthusiast, Data Science Enthusiast</p>
    </div>


    <div className={styles.homeleft}>

      <h1>Hello Recruiter,</h1>
      <RubberBand>
      <h2>I am Shubham.</h2>
      </RubberBand>

      <h2>A React Developer.</h2>
    </div>
    
    </div>
  )
}

export default Home