import Navbar from "@/components/Navbar";
import styles from "../styles/home.module.css"

const home = () => {
    return (
      <div className={styles.container}>
      <Navbar/>
        <h1>Hello World my Home </h1>
      </div>
    );
  };
  
  export default home;