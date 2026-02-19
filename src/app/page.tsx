"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import "./globals.css"
const Home = () => {

  const router = useRouter(); //Esto se hara en el cliente
  return ( 
    <div className={styles.page}>

  <div className={styles.layout}>

    <aside className={styles.characterPanel}>
      <div className={styles.characterStand}></div>
      <div className={styles.character}></div>
    </aside>

    <main className={styles.mainPanel}>
      {/* contenido del juego */}
    </main>

  </div>

  {/* ACTION BAR */}
  <div className={styles.actionBar}>
    <button className={styles.gameButton}>Inventario</button>
    <button className={styles.gameButton}>Misiones</button>
    <button className={styles.gameButton}>Tienda</button>
  </div>

</div>

   );
}


export default Home;

 {/* <Link href={"/laotra"}>Si pinchas veras a dios</Link> */}
      {/*<div className="leon-container">
        <img src="leon.jpg" className="leon-img" alt="León" />
      </div>*/}