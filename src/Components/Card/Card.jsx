import React from 'react'
import styles from './Card.module.css'
import Image from '../../img/img1.jpg'
// import Image1 from '../../img'
import { AiFillGithub } from 'react-icons/ai'
import {BiLinkAlt} from 'react-icons/bi'


const Card = ({props}) => {
  return (
    <div className={styles.carddisplay}>
      <div className={styles.innercard}>
          <img src={Image} alt="projectimage" />
          <div className={styles.links}> 
            <a> <AiFillGithub size={40} /> </a>
            <a> <BiLinkAlt size={40}/> </a>
          </div>
            <p >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            </p>
            
        <div className={styles.cardstack}>
          <p>React</p>
          <p>Redux</p>
        </div>
      </div>

      
    </div>
  )
}

export default Card