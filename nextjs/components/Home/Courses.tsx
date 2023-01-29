import { Typography } from '@mui/material'
import React from 'react'
import styles from "../../styles/Courses.module.css"
const Courses = () => {
  return (
    <>
      <section  className={styles.courses}>
       <Typography className={styles.title}>Our Popular Courses </Typography>
      <div className={styles.container}>
   <article className={styles.course}>
      <div className={styles.course_img}>
        <img width="100%" src="c.jpg"/>
        </div>
        <div className={styles.courseinfo}>
        <Typography sx={{ fontSize: { lg: '25px', xs: '22px',md:"20px"},lineHeight:"normal" ,textAlign:"left",color:"white"}}>
      Responsive Social Media Website UI Design
    </Typography>
  
    <a href="#" style={{ textDecoration: 'none', width: '200px',background: '#FF2625', padding: '12px', fontSize: '20px', color: 'white', borderRadius: '4px' }}>Get Started</a>
   </div>
    </article>




    <article className={styles.course}>
      <div className={styles.course_img}>
        <img  width="100%" src="c1.jpg"/>
        </div>
        <div className={styles.courseinfo}>
        <Typography sx={{ fontSize: { lg: '25px', xs: '22px',md:"20px"},lineHeight:"normal" ,textAlign:"left",color:"white"}}>
        Responsive SmartHome Website Design
    </Typography>
    <a href="#" style={{ textDecoration: 'none', width: '200px',background: '#FF2625', padding: '12px', fontSize: '20px', color: 'white', borderRadius: '4px' }}>Get Started</a>
   </div>
    </article>



      <article className={styles.course}>
      <div className={styles.course_img}>
        <img  width="100%" src="c2.jpg"/>
        </div>
        <div className={styles.courseinfo}>
        <Typography sx={{ fontSize: { lg: '25px', xs: '22px',md:"20px"},lineHeight:"normal" ,textAlign:"left",color:"white"}}>
        Responsive Admin Dhashboard Ui Design
            </Typography>
    <a href="#" style={{ textDecoration: 'none', width: '200px',background: '#FF2625', padding: '12px', fontSize: '20px', color: 'white', borderRadius: '4px' }}>Get Started</a>
   </div>
    </article>

    
        </div>

      </section>
      </>
  )
}

export default Courses