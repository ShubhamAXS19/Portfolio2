import React from 'react';
import { Link, Routes ,Route } from 'react-router-dom';
import styles from './Project.module.css'
import  AllProjects from '../AllProject/AllProjects'
import Image1 from '../../img/img1.jpg'
const Project = () => {
  return (
    <div className={styles.project}>
      
      
        <div className={styles.leftdis}>
        <img src={Image1} alt="image1" />
        <img src={Image1} alt="image2" />
        <img src={Image1} alt="image3" />
        <img src={Image1} alt="image4" />
        </div>

          <div className={styles.rightdis}>
            <h1>Projects</h1>
            <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Commodi modi laborum nemo ut sequi? Doloremque nam maiores 
            voluptatum pariatur esse ullam odit dolorem cupiditate, minima 
            ratione! Sapiente accusamus quaerat vitae?
            </p>
          <Link to="/allprojects"> 
          <button> View All Projects </button> 
          </Link>
          </div>
      

        
        <Routes>
          <Route path='/allprojects' element={<AllProjects/>} />
        </Routes>
      </div>
  )
}

export default Project