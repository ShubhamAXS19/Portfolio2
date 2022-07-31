import React from 'react'
import styles from './Card.module.css'
import DataSci from '../../img/data-science.svg'
import WebDev from '../../img/web-window.svg'
import uiux from '../../img/graphic-design.svg'


const Card1 = () => (
  <div className={styles.card1}>
    <img src={DataSci} alt="" />
       <h4>Data Science</h4>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ipsum cupiditate! Blanditiis enim asperiores labore praesentium ipsum nihil maiores quos veniam. Alias eveniet ipsum reiciendis maiores quam laboriosam fugit. Officiis.
        {/* Making Data Driven Decision to solve your real life problem */}
      </p>
  </div>
)

const Card2 = () => (
  <div className={styles.card2}>
    <img src={WebDev} alt="" />
       <h4>Web Developer</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ipsum cupiditate! Blanditiis enim asperiores labore praesentium ipsum nihil maiores quos veniam. Alias eveniet ipsum reiciendis maiores quam laboriosam fugit. Officiis.
      </p>
  </div>
)

const Card3 = () => (
  <div className={styles.card3}>
    <img src={uiux} alt="" />
    <h4>UI/UX Design</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, ipsum cupiditate! Blanditiis enim asperiores labore praesentium ipsum nihil maiores quos veniam. Alias eveniet ipsum reiciendis maiores quam laboriosam fugit. Officiis.
      </p>
  </div>
)


const Cardssss = () => {
  return (
    <div className={styles.cardss}>
     <Card1/>
     <Card2/>
     <Card3/>
    </div>
  )
}

export default Cardssss