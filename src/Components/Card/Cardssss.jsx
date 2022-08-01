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
        Making Data Driven Decision to solve your real life problem.
      </p>
  </div>
)

const Card2 = () => (
  <div className={styles.card2}>
    <img src={WebDev} alt="" />
       <h4>Web Developer</h4>
      <p>
        React,JavaScript, Sass,Vercel,<br /> Bootstrap,Netlify,<br /> Git, Github ...
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae magnam provident dicta ullam fuga modi voluptates? Dolore veniam iusto possimus omnis sequi quo esse nobis maxime amet, non autem dolores. */}
      </p>
  </div>
)

const Card3 = () => (
  <div className={styles.card3}>
    <img src={uiux} alt="" />
    <h4>UI/UX Design</h4>
      <p>
        Designing unique and eye catching user interface for your website
      </p>
  </div>
)


const Cardssss = () => {
  return (
    <div className={styles.cardover}>
        <div className={styles.cardss}>
     <Card1/>
     <Card2/>
     <Card3/>
    </div>
    </div>
  )
}

export default Cardssss