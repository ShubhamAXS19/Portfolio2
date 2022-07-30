import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {BsGithub} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {TiThMenu} from 'react-icons/ti'

const Navbar = () => {
  return (
    <div className={styles.navbar}>

      <div className={styles.navleft}>
        <ul>
          <Link to="/#home"> <li>Home</li></Link>
          <Link to="/#about"> <li>About</li></Link>
          <Link to="/allprojects"> <li>Projects</li></Link>
          <Link to="/#contact"> <li>Contact</li></Link>
        </ul>
      </div>

          <div className={styles.navicon}>
            <ol>
            <li><MdDarkMode size={40} style={{cursor:"pointer"}} onClick = {() => {}}/></li>
            <li><Link to="https://github.com/ShubhamAXS19"><BsGithub  size={30}/></Link></li>
            <li><TiThMenu size={30}/></li>
            </ol>
          </div>
      
    </div>
  )
}

export default Navbar