import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import styles from "../../styles/HomeBanner.module.css";
const HomeBanner = () => {
  return (
    <Box className={styles.header} >
    <Box className={styles.cont}  >
    <Box className={styles.left} >
    <Typography className={styles.title}>𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓 𝖎𝖘 𝕷𝖊𝖆𝖗𝖓𝖎𝖌 </Typography>
    <Typography sx={{ fontSize: { lg: '33px', xs: '32px',md:"26px"},lineHeight:"normal" }}>
    𝐋𝐞𝐚𝐫𝐧, 𝐒𝐦𝐢𝐥𝐞  <br /> 𝐚𝐧𝐝 𝐑𝐞𝐩𝐞𝐚𝐭 
    </Typography>
    <Typography sx={{ fontSize: { lg: '22px', xs: '18px',md:"20px" }, lineHeight:"normal"}} fontFamily="Alegreya" lineHeight="35px">
      Check out the most effective courses personalized to you
    </Typography>
    <Stack>
      <a href="#" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Get Started</a>
    </Stack>
    </Box>
    {/* <Stack> */}
    <Box  className={styles.right} >
    <img  style={{opacity:0.7}} className={styles.educational} src="educational.svg"/>
    </Box>
   
  </Box>
  <Typography style={{textAlign:"center",lineHeight:"normal"}}  fontWeight={560} color="#FF2625" sx={{margin:{ lg: "7rem 10rem", md:"5rem 5rem",sm:"5rem" }, opacity: '0.4', display: { sm: 'block', xs: 'none' }, fontSize: { lg: '55px', md: '45px',sm:"35px" } }}>
  Grow Your Skills to advance your career path
    </Typography>
</Box>
  )
}

export default HomeBanner