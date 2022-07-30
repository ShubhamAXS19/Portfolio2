import React from 'react'
import styles from './Skills.module.css'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {GrReactjs} from 'react-icons/gr'
import {FaBootstrap} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import {SiRedux} from 'react-icons/si'
import { SiMaterialui } from 'react-icons/si'


const Skills = () => {
  return (
    <div className={styles.skill}>
        <h1>Skills</h1>
        <AiFillHtml5 size={150} color="orange"/>
        <DiCss3 size={150}  color="darkblue"/>
        <FaBootstrap size={150}  color="darkviolet"/>
        <GrReactjs size={150}  color="blue"/>
        <SiRedux size={150}  color="purple"/>
        <BsGithub size={150}  color=""/>
        <SiMaterialui size={150}  color="blue"/>
    </div>
  )
}

export default Skills