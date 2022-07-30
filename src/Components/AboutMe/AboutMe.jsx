import React from 'react';
import styles from './AboutMe.module.css';
import { Link } from 'react-router-dom';
import Image from '../../img/img.jpg'
const AboutMe = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutleft}>
        <h1>About Me</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat autem harum 
          deleniti similique quis placeat iusto. Quis, explicabo animi! Ex, commodi temporibus
          exercitationem autem distinctio similique iste cum cupiditate!
        </p>
          <Link to="/"> <button>  View Resume </button> </Link>
      </div>
      <div className={styles.aboutright}>
          <img src={Image} style={{height:"5rem",width:"10rem"}} alt="" />
          <img src={Image} style={{height:"5rem",width:"10rem"}} alt="" />
          <img src={Image} style={{height:"5rem",width:"10rem"}} alt="" />
          <img src={Image} style={{height:"5rem",width:"10rem"}} alt="" />
      </div>

    </div>
  )
}

export default AboutMe