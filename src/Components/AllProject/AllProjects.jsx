import React from 'react'
import ProjectInfo from '../AllProject/ProjectInfo'
import Card from '../Card/Card'
import styles from './AllProject.module.css'


const AllProjects = () => {
  // const navigate = useNavigate();
  return (
    <div className={styles.projectlist}>

     <div className={styles.gitbtn}>

      <h2>Projects</h2>
      <p>Some of my projects</p>
      <p>you may check out github for a more up to date list</p>


     <a href='https://github.com/ShubhamAXS19'> 
      <button> View on Github</button> 
      </a>
     </div>

      <Card Gitlink={ProjectInfo[0][0]} Hostlink={ProjectInfo[0].hostlink}/>
      <Card Gitlink={ProjectInfo[1].gitlink} Hostlink={ProjectInfo[1].hostlink}/>
      <Card />
      
     
     
    </div>

  )
}

export default AllProjects