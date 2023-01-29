import React from 'react'
import styles from "../../styles/Achieve.module.css"
import { Typography } from '@mui/material';
const Achievements = () => {
  return ( 
    <div  className={styles.About_Ach}>
         <div className={styles.container}>
         <div className={styles.left}>
            <img width="100%" src="achievement.svg" alt="achievement"/>
        </div>
        <div className={styles.right}>
            {/* <h1>Achievements</h1> */}
            <Typography className={styles.title}>Achievements</Typography>

            <Typography sx={{ fontSize: { lg: '20px', xs: '20px',md:"18px"},textAlign:"left",color:"white"}}>
            Demonstrating the ability to motivate and encourage students to progress in their studies is an excellent way to show their commitment, enthusiasm and skill in the role.
            </Typography>
            <div className={styles.cards}>
            <article className={styles.card}>
            <span className={styles.icon}>
                <img src="courses.png"/>
            </span>
            <h3>450+</h3>
            <p>Courses</p>
            </article>



            <article className={styles.card}>
            <span className={styles.icon}> <img src="std.png"/></span>
            <h3>79,000+</h3>
            <p>Students</p>
            </article>

            <article className={styles.card}>
            <span className={styles.icon}> <img src="award.png"/></span>
            <h3>26</h3>
            <p>Awards</p>
            </article>
            </div>

            </div>

        </div>
    </div>
  )
}

export default Achievements