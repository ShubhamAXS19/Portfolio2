import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {BsGithub} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {TiThMenu} from 'react-icons/ti'
import SmallNav from '../../img/navicon.png'


const Navbar = () => {
  return (
    <div className={styles.navbar}>

          <div className={styles.navleft1}>
          
            <img src={SmallNav} alt="face"  style={{height:"4rem" , width:"4rem" }} className={styles.smallnavpic}/>
            
          </div>

          <div className={styles.navright1}>
            <ul>
            <li> <Link to="/#home"> Home</Link></li>
            <li> <Link to="/#about"> About</Link> </li>
            <li> <Link to="/allprojects"> Projects</Link></li>
            <li> <Link to="/#contact"> Contact</Link> </li>
            <li><MdDarkMode size={50} style={{cursor:"pointer"}}/></li>
            <li><Link to="https://github.com/ShubhamAXS19"><BsGithub size={30}/></Link></li>
            </ul>
          </div>
      

          <div className={styles.mobilenav}>
            <ul>
            <li>
            <img src={SmallNav} alt="face"  style={{height:"4rem" , width:"4rem" }} className={styles.smallnavpic}/>
            </li>
          
            <li><MdDarkMode size={40} style={{cursor:"pointer"}} onClick = {() => {}}/></li>
            <li><Link to="https://github.com/ShubhamAXS19"><BsGithub  size={30}/></Link></li>
            <li ><TiThMenu size={30}/></li>
            </ul>
          
          </div>
    </div>
  )
}

export default Navbar