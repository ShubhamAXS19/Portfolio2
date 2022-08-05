import React from 'react';
import styles from './Footer.module.css'
import {BsTwitter} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.leftfooter}>
        <a href="https://twitter.com/i/flow/login"><BsTwitter size={30}/></a>
        <a href="sv773460@gmail.com"><SiGmail size={30}/></a>
        <a href="https://www.linkedin.com"><BsLinkedin size={30}/></a>
        <a href="https://www.instagram.com/"><FaInstagramSquare size={30}/></a>
        <a href="https://www.youtube.com/"><IoLogoYoutube size={30}/></a>
      </div>
      <div className={styles.rightfooter}>
          Copyright &copy; 2022 Shubham V.
      </div>

    </div>
  )
}

export default Footer