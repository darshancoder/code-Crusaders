import React from 'react'
import {useState} from "react"
import styles from '../../styles/Home.module.css'
import {  Typography,Box } from '@mui/material';

import { AddIcon } from '@chakra-ui/icons'
//   let [val,setVal] = useState(false)
  const handle = ()=>{
//     val?setVal(false):setVal(true)
  }

const FAQ = () =>
 {
  return (
<>
<Box className={styles.main1}>

      <section className={styles.faqs}>
      <Typography className={styles.title}>Our Popular Courses </Typography>

        <div className={styles.faqs_cont}>
         
          <article className={styles.faq}  >
            <AddIcon  boxSize={"1.2rem"} onClick={handle} />
            <div className = {styles.qa} >
              <h4>what is wat</h4>
              {/* <p style={{display:val?'block':'none'}}>Loremgyuhjiokigykjhbj fkdjlnjlsdfsjlklnasmdsk yugfvgbhjnkkihgkyv fvghbjkgkjfgcgb vbjnkuytfcgvbjnkl</p> */}
            </div>
          </article>
          
          
          <article className={styles.faq}>
          <AddIcon style={{  alignSelf: "flex-start"}} boxSize={"1.2rem"} />
            <div className = {styles.qa}>
              <h4>what is wat</h4>
              <p style={{display:'none'}}>Loremgyuhjiokigykjhbj yugfvgbhjnkkihgkyv fvghbjkgkjfgcgb vbjnkuytfcgvbjnkl</p>
            </div>
          </article>
         
         
          <article className={styles.faq}  >
          <AddIcon  boxSize={"1.2rem"} />
            <div className = {styles.qa}>
              <h4>what is wat</h4>
              <p style={{display:'none'}}>Loremgyuhjiokigykjhbj yugfvgbhjnkkihgkyv fvghbjkgkjfgcgb vbjnkuytfcgvbjnkl</p>
            </div>
          </article>
           <article className={styles.faq}>
           <AddIcon  boxSize={"1.2rem"} />
            <div className = {styles.qa}>
              <h4>what is wat</h4>
              <p style={{display:'none'}}>Loremgyuhjiokigykjhbj yugfvgbhjnkkihgkyv fvghbjkgkjfgcgb vbjnkuytfcgvbjnkl</p>
            </div>
          </article>
          </div>
      </section>
      </Box>
     
</>  )
}
export default FAQ