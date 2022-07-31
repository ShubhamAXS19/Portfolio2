import React from 'react'
import styles from './Card.module.css'
import Image from '../../img/img1.jpg'
// import Image1 from '../../img'
import { AiFillGithub } from 'react-icons/ai'
import {BiLinkAlt} from 'react-icons/bi'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <div className={styles.carddisplay}>
      <div className={styles.innercard}>
          <img src={Image} alt="projectimage" />
          <div className={styles.links}> 
            <Link to="/"> <AiFillGithub size={40} /></Link>
            <Link to="/"> <BiLinkAlt size={40} /></Link>
          </div>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
            
        <div className={styles.cardstack}>
          <p>travel</p>
          <p>winter</p>
        </div>
      </div>

      
    </div>
  )
}

export default Card