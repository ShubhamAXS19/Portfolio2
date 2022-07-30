import React from 'react';
import styles from './Home.module.css';
import banner from '../../img/banner.png'
import RubberBand from 'react-reveal/RubberBand';

const Home = () => {
  return (
    <div className={styles.home}>

    <div className={styles.right}>
        <img src={banner} alt="" />
    </div>


    <div className={styles.left}>

      <h1>Hello Recruiter</h1>
      <RubberBand>
      <h2>I am Shubham</h2>
      </RubberBand>

      <h2>A React Developer</h2>
    </div>
    
    </div>
  )
}

export default Home