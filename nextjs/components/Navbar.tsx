import React, { useRef } from 'react'
import styles from "../styles/Navbar.module.css"
import { FaBars} from "react-icons/fa";

// import contact from '../pages/contact';
const Navbar = () => {
    const navRef = useRef();

	const showNavbar = () => {
		// navRef.current.classList.toggle("responsive_nav");
	};
  return (
    <header className={styles.header} >
  <a href="/"><div className={styles.logo}><img src="next.svg" alt="Logo" />  </div>  </a>
            <ul className={styles.navbar}> 
            <li><a href="/" className={styles.active}>Home</a></li>
            <li><a href="/store">Store</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>  
            <div className={styles.main}>
                <a href="#" className={styles.user}><img width={"40px"} src="login.png"/></a>
                <a href="#">Sign Up</a>
                <button className={styles.navbtn} onClick={showNavbar}>
				<FaBars/>
			</button>
            </div>
    </header>
  )
}

export default Navbar

// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../Styles/main.css";

// function Navbar() {
	// const navRef = useRef();

	// const showNavbar = () => {
	// 	navRef.current.classList.toggle("responsive_nav");
	// };

// 	return (
// 		<header className={styles.header}>
// 			<h3>LOGO</h3>
// 			<nav className={styles.nav} ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/#">My work</a>
// 				<a href="/#">Blog</a>
// 				<a href="/#">About me</a>
// 				<button
// 					className={styles.navbtn} classNames={styles.navclosebtn}
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
			// <button className={styles.navbtn} onClick={showNavbar}>
			// 	<FaBars/>
			// </button>
// 		</header>
// 	);
// }

// export default Navbar;