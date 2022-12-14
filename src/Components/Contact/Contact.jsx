import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Contact.module.css'
import {BiMailSend} from 'react-icons/bi'
import {FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaPaperPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className={styles.contact} id="contacts">

      <div className={styles.wrapper}>
      <div className={styles.icon1}>
          <FaPaperPlane size={100} color="gray"/>
      </div>

        <div className={styles.contactinfo}>
            <div><p>Get In Touch</p></div>
            <p><Link to="/sv09734@gmail.com">sv09734@gmail.com</Link></p>
            <div className={styles.reachout}>
                <a href="sv773460@gmail.com"> <BiMailSend size={40}/> </a>
                <a href="/https://www.linkedin.com/"> <FaLinkedinIn size={40}/> </a>
                <a href="/https://www.instagram.com/"> <BsInstagram size={40}/> </a>
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