import React from 'react';
import styles from './AboutMe.module.css';
import { Link } from 'react-router-dom';
// import Image from '../../img/img.jpg'
import Cardssss from '../Card/Cardssss'
const AboutMe = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutleft}>
        <h1>About Me</h1>
        
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugiat autem harum 
          
        </p>
          <Link to="/"> 
          <a href="https://drive.google.com/file/d/1ohSq65gnakWtsNGp8cIaxdAsTJLNG0Ab/view?usp=sharing">

          <button>  View Resume </button>
          </a>
           </Link>
      </div>
      
      <div className={styles.aboutright}>
         <Cardssss/>
      </div>

    </div>
  )
}

export default AboutMe