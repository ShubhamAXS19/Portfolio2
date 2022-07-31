import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Contact.module.css'
import {BiMailSend} from 'react-icons/bi'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaPaperPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className={styles.contact}>

      <div className={styles.wrapper}>
      <div className={styles.icon1}>
          <FaPaperPlane size={100} color="gray"/>
      </div>

        <div className={styles.contactinfo}>
            <div><p>Get In Touch</p></div>
            <p><Link to="/sv09734@gmail.com">sv09734@gmail.com</Link></p>
            <div className={styles.reachout}>
                <Link to="/"> <BiMailSend size={40}/> </Link>
                <Link to="/"> <FaLinkedinIn size={40}/> </Link>
                <Link to="/"> <BsInstagram size={40}/> </Link>
            </div>
        </div>

        <div className={styles.icon2}>
          <FaPaperPlane size={100} color='rgb(0, 25, 59)'/>
      </div>
      </div>
    </div>
  )
}

export default Contact