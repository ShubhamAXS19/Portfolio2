import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../Card/Card'
import styles from './AllProject.module.css'

const AllProjects = () => {
  return (
    <div className={styles.projectlist}>


      <h2>Projects</h2>
      <p>Some of my projects</p>
      <p>you may check out github for a more up to date list</p>


     <div className={styles.gitbtn}>
     <Link to="/github.com/ShubhamAXS19"> 
      <button> View on Github</button> 
      </Link>
     </div>

      <Card/>
      <Card/>
      <Card/>
     
     
    </div>

  )
}

export default AllProjects