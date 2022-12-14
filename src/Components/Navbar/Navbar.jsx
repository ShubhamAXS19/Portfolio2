import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import {BsGithub} from 'react-icons/bs'
import {MdDarkMode} from 'react-icons/md'
import {TiThMenu} from 'react-icons/ti'
import {GrFormClose} from 'react-icons/gr'
import {FiSun} from 'react-icons/fi'
import SmallNav from '../../img/navicon.png'
import { useThemeContext } from '../../Context/ContextProvider';


const Navbar = () => {

  const {lightTheme , turningOnLightTheme} = useThemeContext();

  const [sidebar, setSidebar] = useState(false)
  const [light ,setLight] =useState(false)
  return (
<div className={styles.navbar} id={lightTheme}>

       <div className={styles.navbar1}>

              <div className={styles.navleft1}>
                <img src={SmallNav} alt="face"  style={{height:"4rem" , width:"4rem" }} className={styles.smallnavpic}/>
              </div>

              <div className={styles.navright1}>
                  <ul>
                  <li> <Link to="/"> Home</Link></li>
                  <li> <Link to="/"> About</Link> </li>
                  <li> <Link to="/allprojects"> Projects</Link></li>
                  <li> <Link to="/"> Contact</Link> </li>
                  {/* <li>
                    {light ? <MdDarkMode size={40} style={{cursor:"pointer"}} color="black" onClick = {() => setLight(false)} onChange={turningOnLightTheme} /> :
                         <FiSun size={40} style={{cursor:"pointer"}} color="white" onClick={() => setLight(true)} />}
                  </li> */}
                  <li><a href="https://github.com/ShubhamAXS19"><BsGithub size={30} /></a></li>
                  </ul>
              </div>

          </div>


        <div className={styles.navbar2}>

            <div className={styles.mobileleft}>
              <img src={SmallNav} alt=""/>
            </div>


            <div className={styles.mobileright}>
              <ul>
              <li>{light ? <MdDarkMode size={40} style={{cursor:"pointer"}} color="black" onClick = {() => setLight(false)}/> :
                         <FiSun size={40} style={{cursor:"pointer"}} onClick={() => setLight(true)} />}</li>
              <li><Link to="https://github.com/ShubhamAXS19"><BsGithub  size={30}/></Link></li>
              <li ><TiThMenu size={30} onClick={() => setSidebar(true)}/></li>
              </ul>

              { sidebar && (
                <div className={styles.sidebar}>
                  <GrFormClose onClick={() => setSidebar(false)}/>
                  <ul>
                  <li> <Link to="/home" > Home </Link></li>
                  <li> <Link to="/about"> About</Link> </li>
                  <li> <Link to="/allprojects"> Projects</Link></li>
                  <li> <Link to="/contact"> Contact</Link> </li>
                  </ul>
                </div>
              )

              }
            </div>
        </div>
</div>
  )
}

export default Navbar