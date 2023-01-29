import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from "../styles/index.module.css"

import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.header}>
     <Navbar/>
    </div>
  )
}
