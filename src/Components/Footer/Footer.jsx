import React from 'react';
import styles from './Footer.module.css'
import {BsTwitter} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <Link to="https://twitter.com/i/flow/login"><BsTwitter size={30}/></Link>
        <Link to="/"><SiGmail size={30}/></Link>
        <Link to="https://www.linkedin.com/feed/"><BsLinkedin size={30}/></Link>
        <Link to="https://www.instagram.com/"><FaInstagramSquare size={30}/></Link>
        <Link to="https://www.youtube.com/"><IoLogoYoutube size={30}/></Link>
      </div>
      <div className={styles.right}>
          Copyright &copy; 2022 Shubham V.
      </div>

    </div>
  )
}

export default Footer